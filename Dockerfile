FROM node:14.4.0-alpine

RUN mkdir /test /node_modules  && chown -R node /test /node_modules
RUN chown -R node $(npm root -g) $(npm root)
USER node
RUN npm install -g ava
COPY package*.json ./

RUN npm install
ENV PATH=/node_modules/.bin:$PATH


WORKDIR /test

CMD [ "npm", "test" ]