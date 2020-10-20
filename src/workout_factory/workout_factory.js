import Workout, { intensityToTime } from "./workout.js";
import Exercise, { Discipline, Intensity, MuscleGroup } from "./exercise.js";

export default class WorkoutFactory {
  constructor(exercises) {
    this.exercises = exercises;
  }

  generateWorkout(total_duration, { disciplines, intensity, muscleGroup }) {
    filtered = this.createFrom({ disciplines, intensity, muscleGroup });
    exercises = filtered.slice(
      0,
      this.calculateNumExercises(total_duration, intensity || Intensity.LOW)
    );
    return new Workout(
      total_duration,
      discipline,
      muscleGroup,
      disciplines,
      exercises
    );
  }

  calculateNumExercises(total_duration, intensity) {
    let total_time = total_duration * 60;
    let time_per_ex =
      intensityToTime[intensity].ex_time + intensityToTime[intensity].rest_time;
    return Math.floor(total_time / time_per_ex);
  }

  createFrom({ disciplines, intensity, muscleGroup }) {
    let filtered = this.exercises;
    if (disciplines !== undefined)
      filtered = this.filterByDiscipline(filtered, disciplines);

    if (intensity !== undefined)
      filtered = this.filterBy(filtered, "intensity", intensity);

    if (muscleGroup !== undefined)
      filtered = this.filterBy(filtered, "muscleGroup", muscleGroup);

    return filtered;
  }

  filterByDiscipline(exercises, value) {
    let filtered = [];
    for (let i = 0; i < exercises.length; i++) {
      if (exercises[i].discipline.includes(value)) filtered.push(exercises[i]);
    }
    return filtered;
  }

  filterBy(exercises, attr, value) {
    let filtered = [];
    for (let i = 0; i < exercises.length; i++) {
      if (exercises[i][attr] == value) filtered.push(exercises[i]);
    }
    return filtered;
  }
}
