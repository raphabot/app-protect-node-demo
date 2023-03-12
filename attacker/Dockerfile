FROM node:19

COPY app/ /usr/src/app

WORKDIR /usr/src/app

RUN npm install

EXPOSE 80

ENTRYPOINT [ "npm", "start" ]