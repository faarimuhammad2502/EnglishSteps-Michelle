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
