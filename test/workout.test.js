const { Workout } = require("../src/workout_factory/workout.js");
const { spec } = require("./exercises_data.js");
const {
  Exercise,
  Discipline,
  Intensity,
  MuscleGroup,
  InvalidDiscipline,
  InvalidMuscleGroup,
  InvalidIntensity,
} = require("../src/workout_factory/exercise.js");
const { expect, assert } = require("chai");

let data = spec.exercises[0];
let ex = new Exercise(
  data.name,
  data.discipline,
  data.intensity,
  data.muscleGroup,
  data.description
);
let w = new Workout(30, "high", "total_body", ["pilates", "cardio"], [ex]);

it("Constructor clase workout", () => {
  expect(w.total_duration).to.eql(30);
  expect(w.intensity).to.eql(Intensity.HIGH);
  expect(w.muscleGroup).to.eql(MuscleGroup.TOTALBODY);
  expect(w.disciplines).to.deep.equal([Discipline.PILATES, Discipline.CARDIO]);
  expect(w.exercises).to.deep.equal([ex]);
});

it("Wrong intensity parameter in the constructor", () => {
  assert.throws(() => {
    new Workout(1, "bad", "bad", "bad", []);
  }, InvalidIntensity);
});

it("Wrong muscle group parameter in the constructor", () => {
  assert.throws(() => {
    new Workout(1, "high", "bad", "bad", []);
  }, InvalidMuscleGroup);
});

it("Wrong discipline parameter in the constructor", () => {
  assert.throws(() => {
    new Workout(1, "high", "total_body", "bad", []);
  }, InvalidDiscipline);

  assert.throws(() => {
    new Workout(1, "high", "total_body", ["bad"], []);
  }, InvalidDiscipline);
});
