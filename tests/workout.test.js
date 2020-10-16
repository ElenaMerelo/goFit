import test from "ava";
import Workout from "../src/workout_factory/workout.js";
import spec from "./exercises_data.js";
import Exercise from "../src/workout_factory/exercise.js";

let data = spec.exercises[0];
// let ex = new Exercise(
//   data.name,
//   data.discipline,
//   data.intensity,
//   data.muscleGroup,
//   data.description
// );

test("Constructor clase workout", (t) => {
  t.pass();
  //   let w = new Workout(30, 40, "high", "total_body", ["pilates", "cardio"], []);
  //   t.is(w.total_duration, 30, "Total duration correctly set");
  //   t.is(w.ex_duration, 40, "Exercise duration correctly set");
  //   t.is(w.intensity, "high", "Intensity correctly set");
  //   t.is(w.muscleGroup, "total_body", "Muscle group correctly set");
  //   t.is(w.disciplines, ["pilates", "cardio"], "Disciplines correctly set");
  //   t.is(w.exercises, [ex], "Exercises correctly set");
});
