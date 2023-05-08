import express from "express";
import "dotenv/config.js";

const PORT = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "hello" });
});

app.listen(PORT, () => {
  console.log(`its on! ${PORT}`);
});
