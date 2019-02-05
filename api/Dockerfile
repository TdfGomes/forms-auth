FROM node:10.12-alpine

RUN apk --update --no-cache add alpine-sdk git python openssl curl bash && \
  rm -rf /tmp/* /var/cache/apk/*

RUN npm i -g pm2
RUN mkdir /home/node/api

WORKDIR /home/node/api

COPY package.json ./

RUN npm install

COPY . /home/node/api
COPY bin/watch.sh /home/node/api/watch.sh

EXPOSE 9090
CMD ["sh","watch.sh"]