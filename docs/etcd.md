## Configuración distribuida

Para la configuración distribuida he usado `etcd`. Para implementarlo, he usado el cliente de node `etcd3`, hecho por Microsoft. Esta parte no afecta a los tests, que siguen tomando la configuración por defecto. El orden de prioridad en la configuración es:

1. `etcd`
2. Variables de entorno.
3. Valores por defecto.

Por ahora solo tengo dos variables de configuración:

- `API_ROOT`: path para poner antes de todas las rutas (útil por ejemplo en serverless). **Valor por defecto:** `""`.
- `PORT`: port en el que se levantará la aplicación. **Valor por defecto:** `8000`.

Para conectarnos a nuestro servicio de `etcd`, como mínimo necesitamos saber el host y el puerto en el que se está ejecutando:

~~~javascript
const ETCD_HOST = process.env.ETCD_IP;
const ETCD_PORT = process.env.ETCD_PORT;
const ETCD_IP = `${ETCD_HOST}:${ETCD_PORT}`;
~~~

Posteriormente simplemente tenemos que comprobar que estén definidas y en caso afirmativo crear el cliente y leer las variables correspondientes.

~~~javascript
if (ETCD_PORT && ETCD_HOST) {
    const client = new Etcd3({ hosts: [ETCD_IP] });
    root = await client.get("API_ROOT").string();
    port = await client.get("API_PORT").string();
}
~~~

En caso de que no estén definidas, le asignamos el valor a partir de variables de entorno o en su defecto, valores por defecto.

~~~javascript
root = root || process.env.API_ROOT || "";
port = port || process.env.API_PORT || 8000;
~~~
