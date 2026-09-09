FROM node:22-alpine

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/package*.json ./

RUN npm install --omit=dev

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/app ./app
COPY --from=builder /app/next.config.js ./

EXPOSE 3000

CMD ["npm", "start"]