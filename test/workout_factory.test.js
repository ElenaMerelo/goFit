const {
  Exercise,
  Discipline,
  Intensity,
  MuscleGroup,
} = require("../src/workout_factory/exercise.js");
const { WorkoutFactory } = require("../src/workout_factory/workout_factory.js");
const { spec } = require("./exercises_data.js");
const { expect } = require("chai");

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

let data = spec.exercises[0];
let ex = new Exercise(
  data.name,
  data.discipline,
  data.intensity,
  data.muscleGroup,
  data.description
);

const wf = new WorkoutFactory(exercises);

it("Constructor clase workout factory", () => {
  expect(wf.exercises).to.deep.equal(exercises);
});

it("Método calculateNumExercises", () => {
  expect(wf.calculateNumExercises(40, Intensity.MEDIUM)).to.equal(40);
});
