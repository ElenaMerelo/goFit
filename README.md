![Node.js CI](https://github.com/ElenaMerelo/goFit/workflows/Node.js%20CI/badge.svg?branch=master)

# goFit

> Proyecto para la asignatura de Infraestructura Virtual 

## Descripción

API web para guardar, consultar y obtener fácilmente entrenamientos, ya sean tipo HIIT, cardio, basados en técnicas de kickboxing, una práctica de yoga o pilates,... La idea es que introduciendo tiempo disponible, intensidad y/o grupo muscular deseado, nos cree o nos provea con una sesión del tipo también especificado, de entre las opciones antes mencionadas. Surge con la idea de reducir el tiempo dedicado a la planificación de entrenamientos.

Para correr los tests, ejecutar:

    npm test

Para iniciar la API: 

    npm start

Para desplegar el contenedor Docker:
   
    docker pull elenamerelo/gofit
    docker run -t -v `pwd`:/test

Para descargarte el contenedor del registro de Github:

    docker pull ghcr.io/elenamerelo/gofit:latest

## Rúbricas Práctica 6

He reabierto algunas de de las historias de usuario cerradas anteriormente ([#2](https://github.com/ElenaMerelo/goFit/issues/2), [#3](https://github.com/ElenaMerelo/goFit/issues/4), [#4](https://github.com/ElenaMerelo/goFit/issues/4) y [#5](https://github.com/ElenaMerelo/goFit/issues/5)) para cerrarlas correctamente ahora, al rehacer mi API.

Primeramente creé un documento explicando las nuevas rutas que cubrirían las HU y los tipos que devolverían, para tener claro qué implementar:

- [Documentación endpoints](docs/endpoints.md)

## Rúbricas Práctica 5

- [Documentación serverless](docs/vercel.md)
- [Documentación del bot](docs/telegram.md)

## Rúbricas Práctica 4

- [Integración Continua](docs/ci.md)

## Rúbricas Práctica 3

- [Por qué he elegido `node` como contenedor base de docker](docs/contenedorbase.md)
- [Dockerfile](./Dockerfile)
- [Github registry](https://github.com/users/elenamerelo/packages/container/package/gofit)
- [Contenedor subido a Docker Hub](https://hub.docker.com/r/elenamerelo/gofit)
- [Automatización del build de docker](docs/dh.md)
- [Configuración GitHub Container registry](docs/ghcr.md)

## Estructuración

- Las clases creadas para poder llevar a cabo el proyecto se encuentran [aquí](src/). 
- [Documentación](docs/)
- El proceso del repositorio puede consultarse [aquí](docs/changelog.md)
- [Tests](tests)

## Historias de usuario 

Requisitos que nos gustaría cumpliera el proyecto:

- [HU1: Crear perfil de usuario](https://github.com/elenamerelo/goFit/issues/2)
- [HU2: Crear entrenamientos según una duración](https://github.com/elenamerelo/goFit/issues/3)
- [HU3: Crear entrenamientos según una intensidad](https://github.com/elenamerelo/goFit/issues/4)
- [HU4: Crear entrenamientos según un grupo muscular](https://github.com/elenamerelo/goFit/issues/5)
- [HU5: Crear entrenamientos según una disciplina](https://github.com/elenamerelo/goFit/issues/6)
- [HU6: Crear entrenamiento](https://github.com/elenamerelo/goFit/issues/23)

## En cuanto a configuración

- [Configuración de `git`](docs/git.md)
- [Configuración de `AVA`](docs/ava.md)
- Ficheros y otros parámetros de configuración en [iv.yaml](iv.yaml)

### Enlaces adicionales 

- [Por qué he elegido `javascript`](docs/herramientas.md)
- [Por qué he elegido `AVA` como marco de pruebas de `javascript`](docs/herramientas.md)
- [Por qué he elegido `npm` como task runner](docs/herramientas.md)
- [Planificación del proyecto](docs/planning.md)
- Sobre la [biblioteca de aserciones](docs/aserciones.md)

## Autora 

Elena Merelo Molina