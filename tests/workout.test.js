import test from "ava";
import Workout from "../src/workout_factory/workout.js";
import spec from "./exercises_data.js";
import Exercise, {
  Discipline,
  Intensity,
  MuscleGroup,
  InvalidDiscipline,
  InvalidMuscleGroup,
  InvalidIntensity,
} from "../src/workout_factory/exercise.js";

let data = spec.exercises[0];
let ex = new Exercise(
  data.name,
  data.discipline,
  data.intensity,
  data.muscleGroup,
  data.description
);
let w = new Workout(30, 40, "high", "total_body", ["pilates", "cardio"], [ex]);

test("Constructor clase workout", (t) => {
  t.is(w.total_duration, 30, "Total duration correctly set");
  t.is(w.ex_duration, 40, "Exercise duration correctly set");
  t.is(w.intensity, Intensity.HIGH, "Intensity correctly set");
  t.is(w.muscleGroup, MuscleGroup.TOTALBODY, "Muscle group correctly set");
  t.deepEqual(
    w.disciplines,
    [Discipline.PILATES, Discipline.CARDIO],
    "Disciplines correctly set"
  );
  t.deepEqual(w.exercises, [ex], "Exercises correctly set");
});

test("Wrong intensity parameter in the constructor", (t) => {
  t.throws(
    () => {
      new Workout(1, 1, "bad", "bad", "bad", []);
    },
    { instanceOf: InvalidIntensity }
  );
});

test("Wrong muscle group parameter in the constructor", (t) => {
  t.throws(
    () => {
      new Workout(1, 1, "high", "bad", "bad", []);
    },
    { instanceOf: InvalidMuscleGroup }
  );
});

test("Wrong discipline parameter in the constructor", (t) => {
  t.throws(
    () => {
      new Workout(1, 1, "high", "total_body", "bad", []);
    },
    { instanceOf: InvalidDiscipline }
  );

  t.throws(
    () => {
      new Workout(1, 1, "high", "total_body", ["bad"], []);
    },
    { instanceOf: InvalidDiscipline }
  );
});
