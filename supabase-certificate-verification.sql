-- Run once in Supabase SQL Editor after the existing learner_progress table exists.
-- The public view intentionally omits user_id and all private learning data.
create table if not exists public.certificate_registry (
  certificate_id text primary key check (certificate_id ~ '^ES-[A-F0-9]{8}$'),
  user_id uuid not null references auth.users(id) on delete cascade,
  recipient_name text not null check (recipient_name = 'Michelle'),
  course text not null check (course = 'English for Educators'),
  module_count integer not null check (module_count = 8),
  issued_at date not null
);

alter table public.certificate_registry enable row level security;
drop policy if exists "Owners can register completed certificates" on public.certificate_registry;
drop policy if exists "Owners can check their certificate record" on public.certificate_registry;
create policy "Owners can register completed certificates"
  on public.certificate_registry for insert to authenticated
  with check (
    auth.uid() = user_id
    and exists (
      select 1 from public.learner_progress p
      where p.user_id = auth.uid()
        and p.data->'completed' @> '[0,1,2,3,4,5,6,7]'::jsonb
    )
  );
create policy "Owners can check their certificate record"
  on public.certificate_registry for select to authenticated
  using (auth.uid() = user_id);

revoke all on public.certificate_registry from anon, authenticated;
grant usage on schema public to anon, authenticated;
grant insert, select on public.certificate_registry to authenticated;

drop view if exists public.certificate_verification;
create view public.certificate_verification
  with (security_barrier = true)
  as select certificate_id, recipient_name, course, module_count, issued_at
  from public.certificate_registry;
revoke all on public.certificate_verification from public, anon, authenticated;
grant select on public.certificate_verification to anon, authenticated;
