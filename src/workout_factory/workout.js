import {
  Intensity,
  Discipline,
  MuscleGroup,
  InvalidIntensity,
  InvalidMuscleGroup,
  InvalidDiscipline,
} from "./exercise.js";

export default class Workout {
  constructor(
    total_duration, // minutes
    ex_duration, // seconds
    intensity,
    muscleGroup,
    disciplines,
    exercises
  ) {
    this.total_duration = total_duration;
    this.ex_duration = ex_duration;
    this.exercises = exercises;

    if (Object.values(Intensity).indexOf(intensity) === -1)
      throw new InvalidIntensity(intensity);
    this.intensity = intensity;

    if (Object.values(MuscleGroup).indexOf(muscleGroup) === -1)
      throw new InvalidMuscleGroup(muscleGroup);
    this.muscleGroup = muscleGroup;

    if (!Array.isArray(disciplines)) throw new InvalidDiscipline(disciplines);
    for (let i = 0; i < disciplines.length; i++) {
      if (Object.values(Discipline).indexOf(disciplines[i]) === -1)
        throw new InvalidDiscipline(disciplines[i]);
    }
    this.disciplines = disciplines;
  }
}
