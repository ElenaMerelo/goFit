## Darse de alta
  
Para ello me fui a [este enlace](https://travis-ci.org), pulsé registrarme desde GitHub y como ya lo había hecho anteriormente para otros repos me salió directamente:
[]!(img/4-1.png) 

##  Activar el repositorio en el que se vaya a aplicar la integración continua

Desde la página a la que fui redirigida automáticamente, le di al icono de `+` para añadir el repositorio al que quiero que se haga integración continua: 

[]!(img/4-2.png)

Busqué goFit entre ellos, y le di al botoncico 

[]!(img/4-3.png)

Añado un fichero `.travis.yml` al directorio raíz de mi directorio

[]!(img/4-4.png) 

- En `language` indico que es `nodeJS`
- En `node_js` indico la versión que tiene que usar. Yo uso la versión 14.13.0, por eso pongo `14`.
- En `before_install` indico lo que tiene que hacer antes de que instale la aplicación. Instalo pues `ava` y el resto de dependencias.
- En `script` ponemos la orden que queremos que corra. 

Queda finalmente:

[]!(img/4-5.png)

## Migrar de `.org` a `.com`

Sin querer me he registrado en `travis-ci.org` (por seguir el enlace que salía en los apuntes de la asignatura T.T), que va a migrarse próximamente a `travis-ci.com`. Para ello, activo la app de integración de GitHub de Travis CI en la siguiente [página](https://github.com/apps/travis-ci/).

[]!(img/4-7.png)
[]!(img/4-8.png)
[]!(img/4-9.png)