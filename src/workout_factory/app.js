import express from "express";

const app = express();

// utilizamos primero un middleware para transformar el raw input a json
app.use(express.json());

app.get("/", (req, res) => res.send("Welcome to goFit"));

export default app;
