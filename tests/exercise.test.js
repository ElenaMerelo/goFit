import test from "ava";
import Exercise, {
  Discipline,
  Intensity,
  MuscleGroup,
  InvalidDiscipline,
  InvalidMuscleGroup,
  InvalidIntensity,
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
  t.deepEqual(ex.discipline, [Discipline.KICKBOXING, Discipline.HIIT]);
  t.is(ex.intensity, Intensity.HIGH);
  t.is(ex.muscleGroup, MuscleGroup.UPPERBODY);
  t.is(ex.description, "side plank");
});

test("Getter de discipline", (t) => {
  t.deepEqual(ex.discipline, [Discipline.KICKBOXING, Discipline.HIIT]);
});

test("Getter de intensity", (t) => {
  t.is(ex.intensity, Intensity.HIGH);
});

test("Getter de muscleGroup", (t) => {
  t.is(ex.muscleGroup, MuscleGroup.UPPERBODY);
});

test("Setter de discipline", (t) => {
  ex.discipline = [Discipline.CARDIO];
  t.deepEqual(ex.discipline, [Discipline.CARDIO], "Disciplina correcta");
  t.throws(
    () => {
      ex.discipline = "not an array";
    },
    { instanceOf: InvalidDiscipline }
  );
  t.throws(
    () => {
      ex.discipline = ["an array but with an invalid value"];
    },
    { instanceOf: InvalidDiscipline }
  );
});

test("setter de intensity", (t) => {
  ex.intensity = Intensity.MEDIUM;
  t.is(ex.intensity, Intensity.MEDIUM);
  t.throws(
    () => {
      ex.intensity = "not an intensity";
    },
    { instanceOf: InvalidIntensity }
  );
});

test("setter de muscleGroup", (t) => {
  ex.muscleGroup = MuscleGroup.TOTALBODY;
  t.is(ex.muscleGroup, MuscleGroup.TOTALBODY);
  t.throws(
    () => {
      ex.muscleGroup = "not a muscleGroup";
    },
    { instanceOf: InvalidMuscleGroup }
  );
});
