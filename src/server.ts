import express from "express";
import "dotenv/config.js";
import { categoriesRoutes } from "./routes/categories.routes";

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use("/categories", categoriesRoutes);

app.listen(PORT, () => {
  console.log(`its on! ${PORT}`);
});
