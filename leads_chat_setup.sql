-- Table for LeadMagnetChat specific leads
create table public.leads_chat (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  email text not null,
  role text not null, -- 'Agencia Saturada', 'Negocio en Caos'
  constraint leads_chat_pkey primary key (id)
);

-- Enable RLS
alter table public.leads_chat enable row level security;

-- Allow public inserts
create policy "Enable insert for everyone" on public.leads_chat
  for insert
  with check (true);
