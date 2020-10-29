import app from "./src/workout_factory/app.js";

const port = 8008;

app.listen(port, () =>
  console.log(`goFit iniciado en http://localhost:${port}`)
);
