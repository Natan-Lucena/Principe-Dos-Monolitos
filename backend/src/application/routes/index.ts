import { Router } from "express";
import { eventRouter } from "../modules/event/routes";
import { rifasRouter } from "../modules/rifa/routes";
import { authRouter } from "../modules/auth/routes";

const router = Router();

router.use("/events", eventRouter);
router.use("/rifas", rifasRouter);
router.use("/auth", authRouter);

export { router };
