-- Crear un tipo ENUM para el estado de la suscripción
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'subscription_status') THEN
    CREATE TYPE subscription_status AS ENUM ('subscribed', 'unsubscribed', 'pending');
  END IF;
END $$;

-- Crear tabla para suscripciones a la newsletter
CREATE TABLE public.newsletter_subscriptions (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  status subscription_status NOT NULL DEFAULT 'subscribed',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  confirmed_at TIMESTAMP WITH TIME ZONE NULL,
  user_id UUID REFERENCES auth.users(id),
  CONSTRAINT newsletter_subscriptions_pkey PRIMARY KEY (id),
  CONSTRAINT newsletter_subscriptions_email_key UNIQUE (email)
);

-- Set comment
COMMENT ON TABLE public.newsletter_subscriptions IS 'Table to store newsletter subscribers';

-- Enable Row Level Security
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Enable read for authenticated users"
  ON public.newsletter_subscriptions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Enable insert for anyone"
  ON public.newsletter_subscriptions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create index on email for faster lookups
CREATE INDEX idx_newsletter_subscriptions_email ON public.newsletter_subscriptions (email);

-- Create index on user_id for faster lookups
CREATE INDEX idx_newsletter_subscriptions_user_id ON public.newsletter_subscriptions (user_id);

-- Función y trigger para manejar la creación de nuevos usuarios y suscripción automática a la newsletter
CREATE OR REPLACE FUNCTION public.handle_new_user_subscribe_to_newsletter()
  RETURNS TRIGGER
  SET search_path = ''
AS $$
BEGIN
  -- Insertar el nuevo usuario en la tabla de newsletter_subscriptions con ENUM para status
  INSERT INTO public.newsletter_subscriptions (email, user_id, status)
  VALUES (NEW.email, NEW.id, 'subscribed')
  ON CONFLICT (email) DO NOTHING; -- Evitar errores si el email ya está registrado

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Crear trigger para ejecutar la función cuando se cree un nuevo usuario
CREATE TRIGGER on_auth_user_created_subscribe_to_newsletter
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user_subscribe_to_newsletter();
