import Exercise from "./exercise.js";


export default class Workout {
    constructor(total_duration, ex_duration, intensity, muscleGroup, discipline, exercises){
        this.total_duration = total_duration;
        this.ex_duration = ex_duration;
        this.intensity = intensity;
        this.muscleGroup = muscleGroup;
        this.discipline = discipline;
        this.exercises = exercises;
    }
}   
