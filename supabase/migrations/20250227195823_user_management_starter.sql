-- Create a table for public profiles
create table profiles (
                        id uuid references auth.users not null primary key,
                        updated_at timestamp with time zone,
                        username text unique,
                        full_name text,
                        avatar_url text,
                        website text,
                        email text unique,

                        constraint username_length check (char_length(username) >= 3)
);
-- Set up Row Level Security (RLS)
-- See https://supabase.com/docs/guides/database/postgres/row-level-security for more details.
alter table profiles
  enable row level security;

create policy "Public profiles are viewable by everyone." on profiles
  for select using (true);

create policy "Users can insert their own profile." on profiles
  for insert with check ((select auth.uid()) = id);

create policy "Users can update own profile." on profiles
  for update using ((select auth.uid()) = id);

-- Add trigger for automatic update of updated_at
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger update_profiles_updated_at
  before update on profiles
  for each row execute procedure update_updated_at();

-- This trigger automatically creates a profile entry when a new user signs up via Supabase Auth.
-- See https://supabase.com/docs/guides/auth/managing-user-data#using-triggers for more details.
create or replace function public.handle_new_user()
  returns trigger
  set search_path = ''
as $$
begin
  insert into public.profiles (id, full_name, avatar_url, email)
  values (new.id,
          coalesce(new.raw_user_meta_data->>'full_name', ''),
          coalesce(new.raw_user_meta_data->>'avatar_url', ''),
          new.email);
  return new;
end;
$$ language plpgsql security definer;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Synchronize email changes between auth.users and profiles
create or replace function sync_email()
returns trigger as $$
begin
  update public.profiles
  set email = new.email
  where id = new.id;
  return new;
end;
$$ language plpgsql;

create trigger on_auth_user_updated
  after update of email on auth.users
  for each row execute procedure sync_email();

-- Set up Storage!
insert into storage.buckets (id, name)
values ('avatars', 'avatars');

-- Set up access controls for storage.
-- See https://supabase.com/docs/guides/storage/security/access-control#policy-examples for more details.
create policy "Avatar images are publicly accessible." on storage.objects
  for select using (bucket_id = 'avatars');

create policy "Authenticated users can upload their avatar." on storage.objects
  for insert with check (bucket_id = 'avatars' and auth.role() = 'authenticated');

create policy "Anyone can update their own avatar." on storage.objects
  for update using ((select auth.uid()) = owner) with check (bucket_id = 'avatars');
