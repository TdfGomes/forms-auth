FROM node:10.12-alpine

RUN mkdir /home/node/app
WORKDIR /home/node/app

COPY package.json package-lock.json ./

RUN npm install

COPY . /home/node/app/

EXPOSE 3000

CMD npm run start