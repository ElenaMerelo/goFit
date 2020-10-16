import Workout from "./workout.js"
import exercises from "../tests/exercises.json";

export default class WorkoutFactory {
    constructor(exercises) {
        this.exercises= exercises;
    }


    createFrom({discipline, intensity, muscleGroup}) {}
    createFromDiscipline(discipline) {
        let filtered= [];
        for(let i= 0; i< exercises.lenght; i++){
            if(exercises[i].discipline == discipline)
                filtered.push(exercises[i]);
        }
        return filtered;
    }

    createFromIntensity(intensity) {
        let filtered= [];
        for(let i= 0; i< exercises.lenght; i++){
            if(exercises[i].intensity == intensity)
                filtered.push(exercises[i]);
        }
        return filtered;
    }

    createFromMuscleGroup(muscleGroup) {
        let filtered= [];
        for(let i= 0; i< exercises.lenght; i++){
            if(exercises[i].muscleGroup == muscleGroup)
                filtered.push(exercises[i]);
        }
        return filtered;
    }
 }

