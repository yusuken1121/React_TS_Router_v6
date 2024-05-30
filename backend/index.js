// import express from "express";
// import cors from "cors";
const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const todos = [
  {
    id: 1,
    title: "Learn React Router",
    completed: false,
  },
  {
    id: 2,
    title: "Learn SvelteKit",
    completed: false,
  },
];
app.get("/todos", (req, res) => res.send(todos));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
