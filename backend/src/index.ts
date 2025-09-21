import express from "express";
import cors from "cors";
import { router } from "./application/routes";
import serverless from "serverless-http";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
  res.json({ message: "Hello from Express on Vercel!" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

module.exports = app;
