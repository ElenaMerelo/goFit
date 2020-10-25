FROM node:latest
WORKDIR /test
COPY package*.json ./
RUN npm install
CMD [ "npm", "test" ]