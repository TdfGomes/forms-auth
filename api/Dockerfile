FROM node:10.12-alpine

USER node

RUN mkdir /home/node/api

WORKDIR /home/node/api

COPY package*.json ./

RUN npm install

COPY . /home/node/api

EXPOSE 8080
CMD [ "npm", "start" ]