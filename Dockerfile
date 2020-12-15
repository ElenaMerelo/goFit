FROM node:14.4.0-alpine

# no se deberia crear este directorio porque node_modules ya lo crea
# el problema es que si no lo creo y le cambio los permisos, npm install
# falla porque el usuario node no tiene permisos de escritura en /
# tambien se que es mala practica escribir en /, pero he intentado de muchas formas
# usar el directorio /home/node, pero no he conseguido hacer que funcione
RUN mkdir /node_modules && chown node /node_modules


# cambiamos a usuario sin privilegios
USER node
ADD package*.json ./
RUN npm install

# esto queda un poco raro, pero he intetado añadir los package*
# con ADD --chown=node y aun asi no me deja borrarlos, asi que
# me cambio temporalmente a root otra vez para poder borrarlos
USER root
RUN rm package.json package-lock.json
RUN mkdir -p /test && chown -R node:node /test
RUN apk update && apk add make
# para que encuentre las dependencias
ENV PATH=/node_modules/.bin:$PATH

# cambiamos de directorio
USER node
WORKDIR /test

# por defecto, ejecutamos
CMD [ "npm", "test" ]