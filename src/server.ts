import express from "express";
import "dotenv/config.js";
import "reflect-metadata";

import { router } from "./routes";
import { db } from "./db";

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use("", router);

app.listen(PORT, () => {
  console.log(`its on! ${PORT}`);
});
