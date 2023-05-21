import express from "express";
import "dotenv/config.js";
import "reflect-metadata";
import "express-async-errors";
import { router } from "./shared/http/routes";
import "./db";

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use("", router);

app.listen(PORT, () => {
  console.log(`its on! ${PORT}`);
});
