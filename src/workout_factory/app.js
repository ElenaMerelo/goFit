const express = require("express");
const { WorkoutFactory } = require("./workout_factory.js");
const { spec } = require("../../test/exercises_data.js");
const {
  Exercise,
  Discipline,
  MuscleGroup,
  Intensity,
} = require("./exercise.js");

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

app.get("/api/exercises/muscle_group/:muscleGroup", (req, res) => {
  const { muscleGroup } = req.params;
  const isValidMuscleGroup = Object.values(MuscleGroup).includes(muscleGroup);
  if (!isValidMuscleGroup) {
    res.status(400).json({ error: "Bad Muscle Group parameter" });
    return;
  }

  const wf = initFactory();
  const exercises = wf.createFrom({ muscleGroup: muscleGroup });
  res.status(200).json(exercises);
});

app.get("/api/exercises/intensity/:intensity", (req, res) => {
  const { intensity } = req.params;
  const isValidIntensity = Object.values(Intensity).includes(intensity);
  if (!isValidIntensity) {
    res.status(400).json({ error: "Bad intensity parameter" });
    return;
  }

  const wf = initFactory();
  const exercises = wf.createFrom({ intensity: intensity });
  res.status(200).json(exercises);
});

app.get("/api/", (req, res) => res.send("Welcome to goFit"));

module.exports = app;
