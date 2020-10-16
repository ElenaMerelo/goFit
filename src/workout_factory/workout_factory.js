import Workout from "./workout.js"
import exercises from "../tests/exercises.json";
import Exercise, {Discipline, Intensity, MuscleGroup} from "./exercise.js";

export default class WorkoutFactory {
    constructor(exercises) {
        this.exercises= exercises;
    }

    createFrom({discipline, intensity, muscleGroup}) {
        // this.createFrom({discipline: disciplines.PILATES, muscleGroups.UPPERBODY})
        let filtered= this.exercises;
        if(discipline !== undefined)
            filtered=this.filterBy(filtered, "discipline", discipline);

        if(intensity !== undefined)
            filtered=this.filterBy(filtered, "intensity", intensity);
        
        if(muscleGroup !== undefined)
            filtered=this.filterBy(filtered, "muscleGroup", muscleGroup);

        return filtered;
    }

    filterBy(exercises, attr, value) {
        let filtered= [];
        for(let i= 0; i< exercises.lenght; i++){
            if(exercises[i][attr] == value)
                filtered.push(exercises[i]);
        }
        return filtered;
    }
 }

