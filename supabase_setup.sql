-- Create the table for storing contacts
create table public.contacts (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  power text null, -- 'Básico', 'Estándar', 'Premium'
  market_sentiment text null, -- 'Alcista', 'Bajista'
  email text not null,
  phone text null,
  message text null,
  constraint contacts_pkey primary key (id)
);

-- Set up Row Level Security (RLS)
-- Enable RLS
alter table public.contacts enable row level security;

-- Allow anyone (public) to insert data (since it's a public contact form)
create policy "Enable insert for anon users" on public.contacts
  for insert
  with check (true);

-- Allow only authenticated users (you, the admin) to view data
create policy "Enable read for authenticated users only" on public.contacts
  for select
  using (auth.role() = 'authenticated');
