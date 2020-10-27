FROM node:14.4.0-alpine

# copiamos los archivos de dependencias 
COPY package*.json ./
# instalamos dependencias
RUN npm install
# para que encuentre las dependencias
ENV PATH=/node_modules/.bin:$PATH

# cambiamos a usuario sin privilegios
USER node
# cambiamos de directorio
WORKDIR /test

# por defecto, ejecutamos 
CMD [ "npm", "test" ]