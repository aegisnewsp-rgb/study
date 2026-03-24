FROM node:22-alpine AS build
WORKDIR /app
ARG BUILD_DATE
COPY package*.json ./
RUN npm ci --legacy-peer-deps
COPY . .
RUN npm run build

FROM nginx:alpine
ARG BUILD_DATE
WORKDIR /usr/share/nginx/html
COPY --from=build --chown=nginx:nginx /app/dist .
EXPOSE 80
