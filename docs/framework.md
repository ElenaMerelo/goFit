## API Framework

En NodeJS existen muchas alternativas diferentes para escoger un framework de routing, yo he analizado dos principalmente:

### ExpressJS

Pros:

- Documentación extensa y abundancia de ejemplos (buena para alguien las novatillas como yo).
- Fácil de configurar.
- User friendly
- Se está convirtiendo en el estándar de Node.
- Abundancia de middlewares y un gran ecosistema.

Cons:

- El manejo de errores se hace muy repetitivo ya que se implementa mediante callbacks, lo que ocasiona escribis muchos bloques `try/catch`.

### Koa

Pros:

- Creado por el mismo equipo que Express.
- Las ventajas de express.
- Puedes usar un `async/await` wrapper para usar un sola función de manejo de errores.
- Código más limpio y leible.
  
Cons:

- Al ser un proyecto joven no está todavía tan pulido como ExpressJS.
- El apoyo es más pequeñu luego se actualiza más lento.
- Usa generadores, que no son compatibles ningún framework de middleware de NodeJS.

La facilidad de uso (al ser nueva en este tema), junto a las otras ventajas, ha hecho que elija a `ExpressJS` como framework para este proyecto.

## Tests

Para testear mi API no he usado `AVA`, ya que no [tiene](https://github.com/avajs/ava/blob/master/docs/recipes/endpoint-testing.md) utilidades para testear endpoints sin tener que levantar un servidor HTTP previamente. Esto es un fallo que cometí a la hora de elegir el framework de tests.

Por esa razón, voy a usar `mocha` con `supertest` y `chai` (como librería de aserciones) para testear la API. Además cambiaré los tests de `AVA` al nuevo framework.