## Logger

Crear un logger en ExpressJS es muy sencillo. Simplemente tenemos que añadir una función como middleware y logear lo que nos parezca conveniente:

~~~javascript
var myLogger = function (req,res,next) {
    console.log('LOGGED');
    next();
};
~~~

O usar un framework que se encargue de formatear los mensajes y sea altamente configurable, como [morgan](https://github.com/expressjs/morgan), creado por el team de ExpressJS.

~~~javascript
const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('combined'))

app.get('/', function (req, res) {
  res.send('hello, world!')
})
~~~