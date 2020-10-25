FROM node:14.4.0-alpine
WORKDIR /test
COPY package*.json ./
RUN npm install .
CMD [ "npm", "test" ]