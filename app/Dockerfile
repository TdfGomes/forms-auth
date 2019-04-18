FROM node:10.12-alpine

RUN mkdir /home/node/app
WORKDIR /home/node/app

COPY package.json yarn.lock ./

RUN npm install && npm audit fix 

COPY . /home/node/app/

EXPOSE 3000

CMD npm run start