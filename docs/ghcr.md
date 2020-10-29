# GitHub Container Registry 

Para subir nuestro contenedor al registro de GitHub, primeramente hemos de crear un Personal Access Token con los permisos necesarios, esto es: 

- `repo` y todos sus subpermisos
- `write:packages`
- `delete:packages`

Ahora, este token hay que añadirlo como secreto a nuestro repositorio para que la GitHub Action pueda acceder a él mediante el uso de una variable de entorno.

Una vez hecho eso, tenemos que logearnos en el registro de GitHub. Para ello, utilizamos las `docker/login-action`. La configuración es exactamente la que indican en la [documentación](https://github.com/docker/login-action#github-container-registry). 

Luego, construimos el contenedor con `docker build` y lo publicamos con `docker push`, empleando `ghcr.io/` como se indica en la documentación.

Una vez publicado, el paquete aparece por defecto como privado, por lo que tenemos que cambiarle la visibilidad en el apartado `packages` de nuestra página personal de GitHub.