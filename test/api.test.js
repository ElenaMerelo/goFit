const supertest = require("supertest");
const expect = require("chai").expect;
const app = require("../src/workout_factory/app.js");

const request = supertest(app);

describe("GET /api/workout/discipline/:discipline", () => {
  it("Returns 200", async function () {
    const response = await request.get("/api/workout/discipline/kickboxing");
    expect(response.status).to.equal(200);
    expect(response.body.length).to.equal(1);
  });

  it("Returns correct exercise", async function () {
    const response = await request.get("/api/workout/discipline/kickboxing");
    const exercise = response.body[0];
    expect(exercise.name).to.equal("front kick");
    expect(exercise._muscleGroup).to.equal("lower_body");
    expect(exercise._intensity).to.equal("low");
    expect(exercise._discipline).to.deep.equal(["kickboxing"]);
  });

  it("Returns 400", async function () {
    const response = await request.get(
      "/api/workout/discipline/invalid_discipline"
    );
    expect(response.status).to.equal(400);
  });
});

describe("GET /api/workout/muscle_group/:muscle_group", () => {
  it("Returns 200", async function () {
    const response = await request.get("/api/workout/muscle_group/total_body");
    expect(response.status).to.equal(200);
    expect(response.body.length).to.equal(1);
  });

  it("Returns correct exercise", async function () {
    const response = await request.get("/api/workout/muscle_group/total_body");
    const exercise = response.body[0];
    expect(exercise.name).to.equal("burpee");
    expect(exercise._muscleGroup).to.equal("total_body");
    expect(exercise._intensity).to.equal("high");
    expect(exercise._discipline).to.deep.equal(["hiit", "cardio"]);
  });

  it("Returns 400", async function () {
    const response = await request.get("/api/workout/muscle_group/invalid");
    expect(response.status).to.equal(400);
  });
});

describe("GET /api/workout/intensity/:intensity", () => {
  it("Returns 200", async function () {
    const response = await request.get("/api/workout/intensity/low");
    expect(response.status).to.equal(200);
    expect(response.body.length).to.equal(3);
  });

  it("Returns correct exercise", async function () {
    const response = await request.get("/api/workout/intensity/low");
    const exercise = response.body[0];
    expect(exercise.name).to.equal("downDog");
    expect(exercise._muscleGroup).to.equal("upper_body");
    expect(exercise._intensity).to.equal("low");
    expect(exercise._discipline).to.deep.equal([
      "yoga",
      "pilates",
      "bodyweight",
      "cardio",
    ]);
  });

  it("Returns 400", async function () {
    const response = await request.get("/api/workout/intensity/invalid");
    expect(response.status).to.equal(400);
  });
});
