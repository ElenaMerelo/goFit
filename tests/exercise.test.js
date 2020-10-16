import test from "ava";
import Exercise, {
  Discipline,
  Intensity,
  MuscleGroup,
} from "../src/workout_factory/exercise.js";

let ex = new Exercise(
  "side plank",
  ["kickboxing", "hiit"],
  "high",
  "upper_body",
  "side plank"
);

test("Constructor clase Exercise", (t) => {
  t.is(ex.name, "side plank");
  t.deepEqual(ex.discipline, ["kickboxing", "hiit"]);
  t.is(ex.intensity, "high");
  t.is(ex.muscleGroup, "upper_body");
  t.is(ex.description, "side plank");
});

test("getter de discipline", (t) => {
  t.deepEqual(ex.discipline, [Discipline.KICKBOXING, Discipline.HIIT]);
});

test("getter de intensity", (t) => {
  t.is(ex.intensity, Intensity.HIGH);
});

test("getter de muscleGroup", (t) => {
  t.is(ex.muscleGroup, MuscleGroup.UPPERBODY);
});

test("setter de discipline", (t) => {
  ex.discipline = [Discipline.CARDIO];
  t.deepEqual(ex.discipline, [Discipline.CARDIO], "Valid input");
  t.throws(() => {
    ex.discipline = "not an array";
  });
  t.throws(() => {
    ex.discipline = ["an array but with an invalid value"];
  });
});

test("setter de intensity", (t) => {
  ex.intensity = Intensity.MEDIUM;
  t.is(ex.intensity, Intensity.MEDIUM);
  t.throws(() => {
    ex.intensity = "not an intensity";
  });
});

test("setter de muscleGroup", (t) => {
  ex.muscleGroup = MuscleGroup.TOTALBODY;
  t.is(ex.muscleGroup, MuscleGroup.TOTALBODY);
  t.throws(() => {
    ex.muscleGroup = "not a muscleGroup";
  });
});
