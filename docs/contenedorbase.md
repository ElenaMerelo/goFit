He usado `node` como contenedor base ya que es la imagen oficial de Node.js en docker, y es lo recomendado dentro de las buenas prácticas. Tiene un equipo que sigue desarrollando y trabajando en él, y es muy usado (2068316508 descargas en el momento en el que escribí esto)

Tiempo | Tamaño | Imagen
--- | --- | --- 
1m54,640s | 954MB | node:14.4.0 
0m39,024s | 129MB | node:14.4.0-alpine
0m41,458s | 178MB | node:14.4.0-slim

Como se puede apreciar, `alpine` es el que ha requerido menos tiempo y tiene menor tamaño, por ello lo he elegido.