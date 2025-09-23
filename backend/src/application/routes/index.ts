import { Router } from "express";
import { eventRouter } from "../modules/event/routes";
import { rifasRouter } from "../modules/rifa/routes";

const router = Router();

router.use("/events", eventRouter);
router.use("/rifas", rifasRouter);

export { router };
