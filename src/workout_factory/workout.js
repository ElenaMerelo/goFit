import Exercise from "./exercise.js";

export default class Workout {
  constructor(
    total_duration,
    ex_duration,
    intensity,
    muscleGroup,
    disciplines,
    exercises
  ) {
    this.total_duration = total_duration;
    this.ex_duration = ex_duration;
    this.intensity = intensity;
    this.muscleGroup = muscleGroup;
    this.disciplines = disciplines;
    this.exercises = exercises;
  }
}
