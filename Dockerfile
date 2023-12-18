FROM node:20.9.0-alpine
WORKDIR /my-nuxt-app
COPY . /my-nuxt-app
RUN npm ci
RUN yarn build
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]