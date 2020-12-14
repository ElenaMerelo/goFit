## Tests

Para testear mi API no he usado `AVA`, ya que no [tiene](https://github.com/avajs/ava/blob/master/docs/recipes/endpoint-testing.md) utilidades para testear endpoints sin tener que levantar un servidor HTTP previamente. Esto es un fallo que cometí a la hora de elegir el framework de tests.

Por esa razón, voy a usar `mocha` con `supertest` y `chai` (como librería de aserciones) para testear la API. Además cambiaré los tests de `AVA` al nuevo framework.