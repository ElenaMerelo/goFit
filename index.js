const createApp = require("./src/workout_factory/app.js");
const { Etcd3 } = require("etcd3");

const ETCD_HOST = process.env.ETCD_IP;
const ETCD_PORT = process.env.ETCD_PORT;
const ETCD_IP = `${ETCD_HOST}:${ETCD_PORT}`;

let root;
let port;
(async () => {
  if (ETCD_PORT && ETCD_HOST) {
    const client = new Etcd3({ hosts: [ETCD_IP] });
    root = await client.get("API_ROOT").string();
    port = await client.get("API_PORT").string();
  }

  root = root || process.env.API_ROOT || "";
  port = port || process.env.API_PORT || 8000;

  const app = createApp(root);
  app.listen(port, () =>
    console.log(`goFit iniciado en http://localhost:${port}`)
  );
})();
