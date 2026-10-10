FROM node:22-alpine AS build
WORKDIR /app
ARG BUILD_DATE
COPY package*.json ./
RUN npm ci --legacy-peer-deps
COPY . .
# `npm run build` also runs the package.json "postbuild" hook, which executes
# scripts/fix-sitemap.cjs against /app/dist (lastmod/priority/noindex strip)
# HERE in the build stage, chained with && so a failure fails the image build.
RUN npm run build

FROM nginx:alpine
ARG BUILD_DATE
WORKDIR /usr/share/nginx/html
COPY --from=build --chown=nginx:nginx /app/dist .
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
