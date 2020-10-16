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
    return this.__discipline__;
  }

  set discipline(attr) {
    if (!Array.isArray(attr))
      throw new Error(`Invalid discipline: ${attr} is not an array`);
    let discipline = [];
    for (let i = 0; i < attr.length; i++) {
      if (Object.values(Discipline).indexOf(attr[i]) !== -1)
        discipline.push(attr[i]);
      else throw new Error(`Invalid discipline: ${attr[i]}`);
    }
    this.__discipline__ = discipline;
  }

  get intensity() {
    return this.__intensity__;
  }

  set intensity(attr) {
    if (Object.values(Intensity).indexOf(attr) !== -1)
      this.__intensity__ = attr;
    else throw new Error("Invalid intensity: " + attr);
  }

  get muscleGroup() {
    return this.__muscleGroup__;
  }

  set muscleGroup(attr) {
    if (Object.values(MuscleGroup).indexOf(attr) !== -1)
      this.__muscleGroup__ = attr;
    else throw new Error("Invalid muscle group: " + attr);
  }
}
