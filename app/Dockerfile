FROM node:10.12-alpine

RUN npm i -g yarn
RUN mkdir /home/node/app
WORKDIR /home/node/app

COPY package.json yarn.lock ./

RUN yarn 

COPY . /home/node/app/

EXPOSE 3000

CMD yarn start