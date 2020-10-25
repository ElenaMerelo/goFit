He usado `node` como contenedor base ya que es la imagen oficial de Node.js en docker (y se recomienda siempre usar "official Docker images", ya que están muy bien documentadas, hacen uso de las mejores prácticas y están diseñadas para los casos de uso más comunes). Tiene un equipo detrás que sigue desarrollando y trabajando en él, y es muy usado (2068316508 descargas en el momento en el que escribí esto)

Tiempo | Tamaño | Imagen
--- | --- | --- 
1m54,640s | 954MB | node:14.4.0 
0m39,024s | 129MB | node:14.4.0-alpine
0m41,458s | 178MB | node:14.4.0-slim

Como se puede apreciar, `alpine` es el que ha requerido menos tiempo y tiene menor tamaño, por ello lo he elegido. Así, se reducirá significativamente el tamaño de mi contenedor, pero sigue siendo compatible con muchas apps. 