![Node.js CI](https://github.com/ElenaMerelo/goFit/workflows/Node.js%20CI/badge.svg?branch=master)

# goFit

> Proyecto para la asignatura de Infraestructura Virtual

## Descripción

API web para guardar, consultar y obtener fácilmente entrenamientos, ya sean tipo HIIT, cardio, basados en técnicas de kickboxing, una práctica de yoga o pilates,... La idea es que introduciendo tiempo disponible, intensidad y/o grupo muscular deseado, nos cree o nos provea con una sesión del tipo también especificado, de entre las opciones antes mencionadas. Surge con la idea de reducir el tiempo dedicado a la planificación de entrenamientos.

Para correr los tests, ejecutar:

    npm test

Para desplegar el contenedor Docker:



## Estructuración

- Las clases creadas para poder llevar a cabo el proyecto se encuentran [aquí](src/). 
- [Documentación](docs/)
- El proceso del repositorio puede consultarse [aquí](docs/changelog.md)
- [Tests](tests/)

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

- [Por qué he eligido `javascript`](docs/herramientas.md)
- [Por qué he elegido `AVA` como marco de pruebas de `javascript`](docs/herramientas.md)
- [Por qué he elegido `npm` como task runner](docs/herramientas.md)
- [Planificación del proyecto](docs/planning.md)
- Sobre la [biblioteca de aserciones](docs/aserciones.md)
- [Por qué he elegido `node` como contenedor base de docker](docs/contenedorbase.md)

## Autora 

Elena Merelo Molina