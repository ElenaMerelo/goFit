FROM node:14.4.0-alpine

COPY package*.json ./
RUN npm install
RUN ls -la /home/node
ENV PATH=/node_modules/.bin:$PATH

USER node
WORKDIR /test

CMD [ "npm", "test" ]