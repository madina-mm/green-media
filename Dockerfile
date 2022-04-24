FROM node:16.13

WORKDIR /green-media-app

COPY package*.json ./
RUN npm install
COPY . .
CMD npm start