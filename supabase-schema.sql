-- Run this in the Supabase SQL Editor after creating the project.
create table if not exists public.learner_progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.learner_progress enable row level security;

drop policy if exists "Learners can read their own progress" on public.learner_progress;
create policy "Learners can read their own progress"
  on public.learner_progress for select to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "Learners can create their own progress" on public.learner_progress;
create policy "Learners can create their own progress"
  on public.learner_progress for insert to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "Learners can update their own progress" on public.learner_progress;
create policy "Learners can update their own progress"
  on public.learner_progress for update to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

revoke all on public.learner_progress from anon, authenticated;
grant usage on schema public to authenticated;
grant select, insert, update on public.learner_progress to authenticated;
