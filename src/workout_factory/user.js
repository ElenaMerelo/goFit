const { Workout } = require("./workout.js");

class User {
  constructor(birthday, height, weight, name, gender) {
    this.birthday = birthday;
    this.height = height;
    this.weight = weight;
    this.name = name;
    this.gender = gender;
  }
}

module.exports = { User };
