import express from "express";
import cors from "cors";
import { router } from "./application/routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
  res.json({ message: "Hello from Express on Vercel!" });
});

export default app;
