# ─── Stage 1: Build the Astro site ─────────────────────────────
FROM node:22-alpine AS build

WORKDIR /app

# Copy dependency files first (for Docker layer caching)
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy source code
COPY . .

# Build the static site
RUN npm run build

# ─── Stage 2: Serve with nginx ──────────────────────────────────
FROM nginx:alpine

# Copy built static files from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"])
