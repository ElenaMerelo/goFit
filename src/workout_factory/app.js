import express from "express";
import WorkoutFactory from "./workout_factory.js";
import spec from "../../tests/exercises_data.js";
import Exercise from "./exercise.js";

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

const app = express();
const wf = new WorkoutFactory(exercises);

// utilizamos primero un middleware para transformar el raw input a json
app.use(express.json());

app.get("/api/", (req, res) => res.send("Welcome to goFit"));

app.get("/api/workout", (req, res) => {
  if (!req.query.duration)
    res.send({ error: "Error: ha de especificar duración" });
  if (!(req.query.intensity || req.query.disciplines || req.query.muscleGroup))
    res.send({ error: "Error: no especifica parámetros" });

  const disciplines = req.query.disciplines
    ? req.query.disciplines.split(",")
    : [];
  res.send(
    wf.generateWorkout(req.query.duration, {
      intensity: req.query.intensity,
      disciplines: disciplines,
      muscleGroup: req.query.muscleGroup,
    })
  );
});

export default app;
