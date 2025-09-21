import { Router } from "express";
import { eventRouter } from "../modules/event/routes";

const router = Router();

router.use("/events", eventRouter);

export { router };
