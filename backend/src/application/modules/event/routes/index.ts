import { PrismaClient } from "@prisma/client";
import { Request, Response, Router } from "express";
import { EventRepositoryImpl } from "../../../../infraestructure/repositories/event-repository-impl";
import { CreateEventUseCase } from "../use-cases/create-event/create-event-use-case";
import { CreateEventController } from "../use-cases/create-event/create-event-controller";
import { ListEventUseCase } from "../use-cases/list-events/list-events-use-case";
import { ListEventController } from "../use-cases/list-events/list-events-controller";
import { JwtService } from "../../auth/services/jwt-service";
import { UserRepositoryImpl } from "../../../../infraestructure/repositories/user-repository-impl";
import { authMiddleware } from "../../../../infraestructure/middlewares/auth-middleware";

const eventRouter = Router();

const prismaClient = new PrismaClient();
const eventRepository = new EventRepositoryImpl(prismaClient);
const userRepository = new UserRepositoryImpl(prismaClient);
const jwtService = new JwtService(userRepository);
const createEventUseCase = new CreateEventUseCase(eventRepository);
const listEventsUseCase = new ListEventUseCase(eventRepository);

eventRouter.post(
  "/",
  authMiddleware(jwtService),
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  (req: Request, res: Response) =>
    new CreateEventController(createEventUseCase).execute(req, res)
);

eventRouter.get(
  "/",
  authMiddleware(jwtService),
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  (req: Request, res: Response) =>
    new ListEventController(listEventsUseCase).execute(req, res)
);

export { eventRouter };
