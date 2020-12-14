const { expect, assert } = require("chai");

const {
  Exercise,
  Discipline,
  Intensity,
  MuscleGroup,
  InvalidDiscipline,
  InvalidMuscleGroup,
  InvalidIntensity,
} = require("../src/workout_factory/exercise.js");

let ex = new Exercise(
  "side plank",
  ["kickboxing", "hiit"],
  "high",
  "upper_body",
  "side plank"
);

it("Constructor clase Exercise", () => {
  expect(ex.name).to.equal("side plank");
  expect(ex.discipline).to.deep.equal([Discipline.KICKBOXING, Discipline.HIIT]);
  expect(ex.intensity).to.equal(Intensity.HIGH);
  expect(ex.muscleGroup).to.equal(MuscleGroup.UPPERBODY);
  expect(ex.description).to.equal("side plank");
});

it("Getter de discipline", () => {
  expect(ex.discipline).to.deep.equal([Discipline.KICKBOXING, Discipline.HIIT]);
});

it("Getter de intensity", () => {
  expect(ex.intensity).to.equal(Intensity.HIGH);
});

it("Getter de muscleGroup", () => {
  expect(ex.muscleGroup).to.equal(MuscleGroup.UPPERBODY);
});

it("Setter de discipline", () => {
  ex.discipline = [Discipline.CARDIO];
  expect(ex.discipline).to.deep.equal([Discipline.CARDIO]);
  assert.throws(() => {
    ex.discipline = "not an array";
  }, InvalidDiscipline);
  assert.throws(() => {
    ex.discipline = ["an array but with an invalid value"];
  }, InvalidDiscipline);
});

it("setter de intensity", () => {
  ex.intensity = Intensity.MEDIUM;
  expect(ex.intensity).to.equal(Intensity.MEDIUM);
  assert.throws(() => {
    ex.intensity = "not an intensity";
  }, InvalidIntensity);
});

it("setter de muscleGroup", () => {
  ex.muscleGroup = MuscleGroup.TOTALBODY;
  expect(ex.muscleGroup).to.equal(MuscleGroup.TOTALBODY);
  assert.throws(() => {
    ex.muscleGroup = "not a muscleGroup";
  }, InvalidMuscleGroup);
});
