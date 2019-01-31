FROM node:10.12-alpine

RUN mkdir /home/node/api

WORKDIR /home/node/api

COPY package.json ./

RUN npm install

COPY . /home/node/api

EXPOSE 9090
CMD [ "npm", "start" ]