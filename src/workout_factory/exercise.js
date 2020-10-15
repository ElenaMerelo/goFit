export const intensities = {
    HIGH: 'high',
    MEDIUM: 'medium',
    LOW: 'low'

}

export const disciplines = {
    YOGA: 'yoga',
    PILATES: 'pilates',
    KICKBOXING: 'kickboxing',
    CARDIO: 'cardio',
    HIIT: 'hiit',
    FUNCTIONALTRAINING: 'functional_training',
    BODYWEIGHT: 'bodyweight'
} 

export const muscleGroups = {
    TOTALBODY: 'total_body',
    LOWERBODY: 'lower_body',
    UPPERBODY: 'upper_body'
}

export default class Exercise {
    constructor(name, discipline, intensity, muscleGroup, description){
        this.name = name;
        this.discipline = discipline;
        this.intensity = intensity;
        this.muscleGroup = muscleGroup;
        this.description = description;
    }

    get discipline(){
        return this.discipline;
    }


    get intensity(){
        return this.intensity;
    }

    get muscleGroup(){
        return this.muscleGroup;
    }
}