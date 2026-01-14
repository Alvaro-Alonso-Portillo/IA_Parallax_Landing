-- ==========================================
-- ESTRUCTURA COMPLETA DE BASE DE DATOS IA_PARALLAX
-- ==========================================
-- Ejecuta este script en el SQL Editor de Supabase para configurar todas las tablas y políticas.

-- 1. TABLA DE CONTACTOS (Formulario General)
create table if not exists public.contacts (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  name text null,
  email text null,
  message text null,
  constraint contacts_pkey primary key (id)
);

-- 2. TABLA DE LEADS DEL CHAT (Lead Magnet)
create table if not exists public.leads_chat (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  email text not null,
  context text null, -- Almacena qué tipo de ayuda necesita
  constraint leads_chat_pkey primary key (id)
);

-- 3. TABLA DE LISTA DE ESPERA (Templates / Plantillas)
create table if not exists public.template_waitlist (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  email text not null,
  template_name text null,
  status text not null default 'pending',
  constraint template_waitlist_pkey primary key (id)
);

-- 4. TABLA DE SOLICITUDES DE LLAMADA (Teléfono Rojo)
create table if not exists public.callback_requests (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  name text null,
  phone text not null,
  preferred_time text null,
  status text not null default 'pending',
  constraint callback_requests_pkey primary key (id)
);

-- ==========================================
-- CONFIGURACIÓN DE SEGURIDAD (RLS)
-- ==========================================

-- Habilitar RLS en todas las tablas
alter table public.contacts enable row level security;
alter table public.leads_chat enable row level security;
alter table public.template_waitlist enable row level security;
alter table public.callback_requests enable row level security;

-- Crear políticas para permitir inserciones públicas (Anónimas)
do $$ 
begin
  -- Política para Contacts
  if not exists (select 1 from pg_policies where policyname = 'Allow public inserts for contacts') then
    create policy "Allow public inserts for contacts" on public.contacts for insert with check (true);
  end if;

  -- Política para Leads Chat
  if not exists (select 1 from pg_policies where policyname = 'Allow public inserts for chat') then
    create policy "Allow public inserts for chat" on public.leads_chat for insert with check (true);
  end if;

  -- Política para Waitlist
  if not exists (select 1 from pg_policies where policyname = 'Allow public inserts for waitlist') then
    create policy "Allow public inserts for waitlist" on public.template_waitlist for insert with check (true);
  end if;

  -- Política para Callback
  if not exists (select 1 from pg_policies where policyname = 'Allow public inserts for callback') then
    create policy "Allow public inserts for callback" on public.callback_requests for insert with check (true);
  end if;
end $$;
