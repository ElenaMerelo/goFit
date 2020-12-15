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

- [Documentación endpoints](docs/endpoints.md)
- [Framework](docs/framework.md)
- [Logger](docs/logger.md)
- [API tests](test/api.test.js)
- [Configuración distribuida](docs/etcd.md)

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