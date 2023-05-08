import express from "express";
import "dotenv/config.js";
import { router } from "./routes";

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use("", router);

app.listen(PORT, () => {
  console.log(`its on! ${PORT}`);
});
