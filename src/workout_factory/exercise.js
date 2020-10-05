export const intensities = {
    HIGH: 'high',
    MEDIUM: 'medium',
    LOW: 'low'

}

export const disciplines = {
    YOGA: 'yoga',
    KICKBOXING: 'kickboxing',
    CARDIO: 'cardio',
    HIIT: 'hiit',
    FUNCTIONALTRAINING: 'functional_training',
    BODYWEIGHT: 'bodyweight'
} 

export const musclegroups = {
    TOTALBODY: 'total_body',
    LOWERBODY: 'lower_body',
    UPPERBODY: 'upper_body'
}

export default class Exercise {
    constructor(name, discipline, intensity, muscleGroup, duration, description){
        this.name = name;
        this.discipline = discipline;
        this.intensity = intensity;
        this.muscleGroup = muscleGroup;
        this.duration = duration;
        this.description = description;
    }
}