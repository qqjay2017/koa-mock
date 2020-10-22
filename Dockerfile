FROM node:current-slim

WORKDIR /usr/src/app
COPY package.json .
RUN npm config set registry https://registry.npm.taobao.org 
RUN npm install
EXPOSE 3001
COPY . .
CMD [ "npm", "start" ]