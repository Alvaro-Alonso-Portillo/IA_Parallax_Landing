# Etapa de compilación
FROM node:20-alpine AS build

WORKDIR /app

# Instalar dependencias primero para cachear capas
COPY package*.json ./
RUN npm install

# Copiar el resto del código
COPY . .

# Recibir variables de entorno como ARG para el build (Deberán configurarse en Easypanel como Build Args)
ARG NEXT_PUBLIC_SUPABASE_URL
ARG NEXT_PUBLIC_SUPABASE_ANON_KEY
ARG NEXT_PUBLIC_CALENDLY_URL
ARG GEMINI_API_KEY

# Convertir ARG en ENV para que Vite los detecte durante npm run build
ENV NEXT_PUBLIC_SUPABASE_URL=$NEXT_PUBLIC_SUPABASE_URL
ENV NEXT_PUBLIC_SUPABASE_ANON_KEY=$NEXT_PUBLIC_SUPABASE_ANON_KEY
ENV NEXT_PUBLIC_CALENDLY_URL=$NEXT_PUBLIC_CALENDLY_URL
ENV GEMINI_API_KEY=$GEMINI_API_KEY

# Ejecutar el build de Vite
RUN npm run build

# Etapa de producción
FROM nginx:stable-alpine

# Copiamos el resultado de Vite (carpeta dist) al servidor Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copiamos nuestra configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
