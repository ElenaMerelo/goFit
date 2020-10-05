import Exercise from "./exercise.js";

export default class Workout {
    constructor(duration, intensity, muscleGroup, discipline, exercises){
        this.duration = duration;
        this.intensity = intensity;
        this.muscleGroup = muscleGroup;
        this.discipline = discipline;
        this.exercises = exercises;
    }
}   
