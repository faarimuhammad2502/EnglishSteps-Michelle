-- Run once in Supabase SQL Editor after supabase-certificate-verification.sql.
create table if not exists public.certificate_settings (
  id integer primary key default 1 check (id = 1),
  data jsonb not null default '{"recipientName":"Michelle","course":"English for Educators","issuer":"EnglishSteps","description":"sebagai bagian dari perjalanan mengembangkan bahasa Inggris untuk konteks pendidikan."}'::jsonb,
  updated_by uuid references auth.users(id) on delete set null,
  updated_at timestamptz not null default now()
);
alter table public.certificate_settings enable row level security;
drop policy if exists "Anyone can read certificate appearance" on public.certificate_settings;
drop policy if exists "Faari admins can create certificate appearance" on public.certificate_settings;
drop policy if exists "Faari admins can update certificate appearance" on public.certificate_settings;
create policy "Anyone can read certificate appearance"
  on public.certificate_settings for select to anon, authenticated using (true);
create policy "Faari admins can create certificate appearance"
  on public.certificate_settings for insert to authenticated
  with check (lower(coalesce(auth.jwt()->>'email','')) in ('faarimuhammad@gmail.com','faarimuhammad25@gmail.com'));
create policy "Faari admins can update certificate appearance"
  on public.certificate_settings for update to authenticated
  using (lower(coalesce(auth.jwt()->>'email','')) in ('faarimuhammad@gmail.com','faarimuhammad25@gmail.com'))
  with check (lower(coalesce(auth.jwt()->>'email','')) in ('faarimuhammad@gmail.com','faarimuhammad25@gmail.com'));
revoke all on public.certificate_settings from public;
grant select on public.certificate_settings to anon, authenticated;
grant insert, update on public.certificate_settings to authenticated;
insert into public.certificate_settings (id) values (1) on conflict (id) do nothing;
alter table public.certificate_registry drop constraint if exists certificate_registry_recipient_name_check;
alter table public.certificate_registry drop constraint if exists certificate_registry_course_check;


-- Site-wide announcements: every signed-in learner can read active notices;
-- only the allow-listed Faari admin accounts can create, edit, or deactivate them.
create table if not exists public.app_announcements (
  id uuid primary key default gen_random_uuid(),
  title text not null check (char_length(title) between 1 and 100),
  message text not null check (char_length(message) between 1 and 1000),
  kind text not null default 'info' check (kind in ('info','important','maintenance')),
  active boolean not null default true,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);
alter table public.app_announcements enable row level security;
drop policy if exists "Signed-in users can read active announcements" on public.app_announcements;
drop policy if exists "Faari admins can read all announcements" on public.app_announcements;
drop policy if exists "Faari admins can create announcements" on public.app_announcements;
drop policy if exists "Faari admins can update announcements" on public.app_announcements;
drop policy if exists "Faari admins can delete announcements" on public.app_announcements;
create policy "Signed-in users can read active announcements"
  on public.app_announcements for select to authenticated using (active);
create policy "Faari admins can read all announcements"
  on public.app_announcements for select to authenticated
  using (lower(coalesce(auth.jwt()->>'email','')) in ('faarimuhammad@gmail.com','faarimuhammad25@gmail.com'));
create policy "Faari admins can create announcements"
  on public.app_announcements for insert to authenticated
  with check (lower(coalesce(auth.jwt()->>'email','')) in ('faarimuhammad@gmail.com','faarimuhammad25@gmail.com'));
create policy "Faari admins can update announcements"
  on public.app_announcements for update to authenticated
  using (lower(coalesce(auth.jwt()->>'email','')) in ('faarimuhammad@gmail.com','faarimuhammad25@gmail.com'))
  with check (lower(coalesce(auth.jwt()->>'email','')) in ('faarimuhammad@gmail.com','faarimuhammad25@gmail.com'));
create policy "Faari admins can delete announcements"
  on public.app_announcements for delete to authenticated
  using (lower(coalesce(auth.jwt()->>'email','')) in ('faarimuhammad@gmail.com','faarimuhammad25@gmail.com'));
revoke all on public.app_announcements from public, anon;
grant select, insert, update, delete on public.app_announcements to authenticated;
