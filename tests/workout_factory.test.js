import test from "ava";
import Exercise, {
  Discipline,
  Intensity,
  MuscleGroup,
} from "../src/workout_factory/exercise.js";
import Workout from "../src/workout_factory/workout.js";
import WorkoutFactory from "../src/workout_factory/workout_factory.js";
import spec from "./exercises_data.js";

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

test("Constructor clase workout factory", (t) => {
  t.deepEqual(wf.exercises, exercises, "Exercises correctly set");
});

test("Método calculateNumExercises", (t) => {
  t.is(
    wf.calculateNumExercises(40, Intensity.MEDIUM),
    40,
    "Number of exercises correctly set"
  );
});

test("Método createFrom", (t) => {
  t.deepEqual(
    wf.createFrom({
      intensity: Intensity.HIGH,
      disciplines: Discipline.PILATES,
    }),
    [ex]
  );
});
