# multi-stage build
FROM node:20.9.0-alpine AS builder
WORKDIR /my-nuxt-app
COPY . /my-nuxt-app
RUN npm ci
RUN npm run build
EXPOSE 3000

FROM node:20.9.0-alpine
WORKDIR /my-nuxt-app
COPY --from=builder /my-nuxt-app/dist ./dist
COPY package*.json ./
RUN npm install --production
CMD ["node", ".output/server/index.mjs"]