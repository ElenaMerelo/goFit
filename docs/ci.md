# Integración contínua 

## Travis 

En Travis he configurado la ejecución de los tests en varias versiones de node. Como se puede ver en [NodeJS](https://nodejs.org/es/), la actual versión LTS es la 14, así que lo he testeado en esa y en dos anteriores solamente, porque de la 12 hacia abajo no se deberían usar ya.

Hay que tener en cuenta dos cosas:

- Las dependencias las he instalado con `npm install ci` porque es el recomendado por la [documentación de npm](https://docs.npmjs.com/cli/v6/commands/npm-ci#description) para entornos automatizados.
- Podría cachear las dependencias fácilmente añadiendo lo siguiente a la configuración:
  
  ~~~yml
  cache:
    directories:
        - '$HOME/node_modules'
  ~~~
  
  Pero no hace falta porque, según la [documentación](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/#caching-with-npm), esto ya se hace por defecto.

El archivo de configuración puede ser consultado [aquí](/.travis.yml).

**Nota:** sin querer me he registrado en `travis-ci.org` (por seguir el enlace que salía en los apuntes de la asignatura T.T), que va a migrarse próximamente a `travis-ci.com`. Para ello, activo la app de integración de GitHub de Travis CI en la siguiente [página](https://github.com/apps/travis-ci/).

## GitHub Actions

Github Actions lo uso para tres cosas:

- Construir el contenedor de testeo para la aplicación.
- Publicar el contenedor al registro de GitHub.
- Usar ese mismo contenedor para ejecutar los tests de la aplicación.

Hay varios aspectos que comentar:

- No uso el contenedor de DockerHub porque la build se activa al hacer cada commit, luego mis tests se correrían con una versión atrasada. En cambio, si construyo el contenedor en GitHub actions y lo uso justo después, siempre va a estar actualizado.
- Podría hacerlo también así en Travis, pero entonces estaría reconstruyendo el contenedor en dos sitios y además no podría probar mi aplicación en varias versiones de Node.

El archivo de configuración para esto puede ser consultado [aquí](/.github/workflows/run-tests.yml).

He de añadir que tengo otra acción configurada para corregir las faltas de ortografía en el README ([archivo de configuración](/.github/workflows/spell_check_readme.yml)).