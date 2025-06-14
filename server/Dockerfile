FROM node:18

RUN apt-get update && apt-get install -y netcat-openbsd

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 3000

CMD sh -c "until nc -z postgres 5432; do echo '⏳ Waiting for DB...'; sleep 1; done && echo '✅ DB is up! Running migrations...' && npx prisma migrate deploy && npm run seed && npm run start:dev"
