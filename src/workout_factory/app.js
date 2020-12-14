const express = require("express");
const { WorkoutFactory } = require("./workout_factory.js");
const { spec } = require("../../test/exercises_data.js");
const { Exercise, Discipline } = require("./exercise.js");

const initFactory = () => {
  const exercises = spec.exercises.map(
    (data) =>
      new Exercise(
        data.name,
        data.discipline,
        data.intensity,
        data.muscleGroup,
        data.description
      )
  );
  return new WorkoutFactory(exercises);
};

const app = express();

app.use(express.json());

app.get("/api/exercises/discipline/:discipline", (req, res) => {
  const { discipline } = req.params;
  const isValidDiscipline = Object.values(Discipline).includes(discipline);
  if (!isValidDiscipline) {
    res.status(400).json({ error: "Bad discipline parameter" });
    return;
  }

  const wf = initFactory();
  const exercises = wf.createFrom({ disciplines: [discipline] });
  res.status(200).json(exercises);
});

app.get("/api/", (req, res) => res.send("Welcome to goFit"));

// app.get("/api/workout", (req, res) => {
//   if (!req.query.duration)
//     res.send({ error: "Error: ha de especificar duración" });
//   if (!(req.query.intensity || req.query.disciplines || req.query.muscleGroup))
//     res.send({ error: "Error: no especifica parámetros" });

//   const disciplines = req.query.disciplines
//     ? req.query.disciplines.split(",")
//     : [];
//   res.send(
//     wf.generateWorkout(req.query.duration, {
//       intensity: req.query.intensity,
//       disciplines: disciplines,
//       muscleGroup: req.query.muscleGroup,
//     })
//   );
// });

module.exports = app;
