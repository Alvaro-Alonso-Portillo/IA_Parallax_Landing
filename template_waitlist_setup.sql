-- Tabla para la lista de espera de plantillas
create table public.template_waitlist (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  email text not null,
  template_name text not null, -- Nombre de la plantilla (ej: 'Bot de Onboarding')
  status text not null default 'pending',
  constraint template_waitlist_pkey primary key (id)
);

-- Habilitar RLS
alter table public.template_waitlist enable row level security;

-- Permitir inserciones públicas (Anónimas)
create policy "Allow public inserts" on public.template_waitlist
  for insert
  with check (true);
