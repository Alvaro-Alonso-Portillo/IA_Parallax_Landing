-- Tabla para solicitudes de llamada (Callback)
create table if not exists public.callback_requests (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  name text null,
  phone text not null,
  preferred_time text null, -- Ej: 'Mañana por la mañana', 'Lo antes posible'
  status text not null default 'pending',
  constraint callback_requests_pkey primary key (id)
);

-- Habilitar RLS
alter table public.callback_requests enable row level security;

-- Permitir inserciones públicas (Anónimas)
create policy "Allow public inserts for callback" on public.callback_requests
  for insert
  with check (true);
