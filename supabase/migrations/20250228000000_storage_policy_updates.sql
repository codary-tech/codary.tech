-- Update avatar storage policies for better security

-- Drop the existing public access policy
drop policy if exists "Avatar images are publicly accessible." on storage.objects;

-- Create a new policy that restricts access to authenticated users
create policy "Avatar access for authenticated users only" on storage.objects
  for select using (bucket_id = 'avatars' and auth.role() = 'authenticated');

-- Refined policy for accessing avatars in user-specific folders
create policy "Users can access their own avatars" on storage.objects
  for select using (
    bucket_id = 'avatars'
    and (
      -- Owner of the avatar
      auth.uid() = owner
      -- OR the avatar is in the user's folder (structured organization)
      or split_part(name, '/', 1) = auth.uid()::text
    )
  );

-- Allow users to upload to their own folders
create policy "Users can upload to their own folders" on storage.objects
  for insert with check (
    bucket_id = 'avatars'
    and auth.role() = 'authenticated'
    and split_part(name, '/', 1) = auth.uid()::text
  );

-- Allow users to update files in their own folders
create policy "Users can update files in their own folders" on storage.objects
  for update using (
    bucket_id = 'avatars'
    and auth.uid() = owner
    and split_part(name, '/', 1) = auth.uid()::text
  );
