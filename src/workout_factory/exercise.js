export const Intensity = {
  HIGH: "high",
  MEDIUM: "medium",
  LOW: "low",
};

export const Discipline = {
  YOGA: "yoga",
  PILATES: "pilates",
  KICKBOXING: "kickboxing",
  CARDIO: "cardio",
  HIIT: "hiit",
  FUNCTIONALTRAINING: "functional_training",
  BODYWEIGHT: "bodyweight",
};

export const MuscleGroup = {
  TOTALBODY: "total_body",
  LOWERBODY: "lower_body",
  UPPERBODY: "upper_body",
};

export default class Exercise {
  constructor(name, discipline, intensity, muscleGroup, description) {
    this.name = name;
    this.discipline = discipline;
    this.intensity = intensity;
    this.muscleGroup = muscleGroup;
    this.description = description;
  }

  get discipline() {
    return this.discipline;
  }

  set discipline(attr){
    if (attr in Object.values(Discipline))
        this.discipline= attr;
    else
        throw new Error("Invalid discipline: " + attr);

  }

  get intensity() {
    return this.intensity;
  }

  set intensity(attr){
    if (attr in Object.values(Intensity))
        this.intensity= attr;
    else
        throw new Error("Invalid intensity: " + attr);

  }

  get muscleGroup() {
    return this.muscleGroup;
  }

  set muscleGroup(attr){
    if (attr in Object.values(MuscleGroup))
        this.muscleGroup= attr;
    else
        throw new Error("Invalid muscle group: " + attr);

  }
}
