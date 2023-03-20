FROM node:18-alpine As builder
WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .
RUN yarn
COPY . .
ENV NODE_ENV=production
RUN yarn build
USER node

FROM node:18-alpine As production
COPY --chown=node:node --from=builder /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=builder /usr/src/app/dist ./dist

ENV USE_HTTPS=false
ENTRYPOINT [ "node", "dist/main.js" ]
