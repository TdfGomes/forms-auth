FROM node:10.12-alpine

RUN apk --update --no-cache add alpine-sdk git python openssl curl bash && \
  rm -rf /tmp/* /var/cache/apk/*
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait
RUN npm i -g nodemon
RUN mkdir /home/node/api

WORKDIR /home/node/api

COPY package.json ./

RUN npm install

COPY . /home/node/api

EXPOSE 9090
CMD /wait && npm start