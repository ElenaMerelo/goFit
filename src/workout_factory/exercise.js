const Intensity = {
  HIGH: "high",
  MEDIUM: "medium",
  LOW: "low",
};

const Discipline = {
  YOGA: "yoga",
  PILATES: "pilates",
  KICKBOXING: "kickboxing",
  CARDIO: "cardio",
  HIIT: "hiit",
  FUNCTIONALTRAINING: "functional_training",
  BODYWEIGHT: "bodyweight",
};

const MuscleGroup = {
  TOTALBODY: "total_body",
  LOWERBODY: "lower_body",
  UPPERBODY: "upper_body",
};

class AttributeError extends Error {
  constructor(type, attr) {
    super(`Invalid attribute: ${attr} is not a ${type}`);
    this.name = "AttributeError";
  }
}

class InvalidDiscipline extends AttributeError {
  constructor(attr) {
    super("discipline", attr);
  }
}

class InvalidIntensity extends AttributeError {
  constructor(attr) {
    super("intensity", attr);
  }
}

class InvalidMuscleGroup extends AttributeError {
  constructor(attr) {
    super("muscle group", attr);
  }
}
class Exercise {
  constructor(name, discipline, intensity, muscleGroup, description) {
    this.name = name;
    this._discipline = discipline;
    this._intensity = intensity;
    this._muscleGroup = muscleGroup;
    this.description = description;
  }

  get discipline() {
    return this._discipline;
  }

  set discipline(attr) {
    if (!Array.isArray(attr)) throw new InvalidDiscipline(attr);
    let discipline = [];
    for (let i = 0; i < attr.length; i++) {
      if (Object.values(Discipline).indexOf(attr[i]) !== -1)
        discipline.push(attr[i]);
      else throw new InvalidDiscipline(attr[i]);
    }
    this._discipline = discipline;
  }

  get intensity() {
    return this._intensity;
  }

  set intensity(attr) {
    if (Object.values(Intensity).indexOf(attr) !== -1) this._intensity = attr;
    else throw new InvalidIntensity(attr);
  }

  get muscleGroup() {
    return this._muscleGroup;
  }

  set muscleGroup(attr) {
    if (Object.values(MuscleGroup).indexOf(attr) !== -1)
      this._muscleGroup = attr;
    else throw new InvalidMuscleGroup(attr);
  }
}

module.exports = {
  Exercise,
  InvalidDiscipline,
  InvalidIntensity,
  InvalidMuscleGroup,
  Discipline,
  MuscleGroup,
  Intensity,
};
