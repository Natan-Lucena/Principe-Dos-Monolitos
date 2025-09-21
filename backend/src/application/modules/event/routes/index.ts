import { PrismaClient } from "@prisma/client";
import { Request, Response, Router } from "express";
import { EventRepositoryImpl } from "../../../../infraestructure/repositories/event-repository-impl";
import { CreateEventUseCase } from "../use-cases/create-event/create-event-use-case";
import { CreateEventController } from "../use-cases/create-event/create-event-controller";
import { ListEventUseCase } from "../use-cases/list-events/list-events-use-case";
import { ListEventController } from "../use-cases/list-events/list-events-controller";

const eventRouter = Router();

const prismaClient = new PrismaClient();
const eventRepository = new EventRepositoryImpl(prismaClient);
const createEventUseCase = new CreateEventUseCase(eventRepository);
const listEventsUseCase = new ListEventUseCase(eventRepository);

eventRouter.post(
  "/",
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  (req: Request, res: Response) =>
    new CreateEventController(createEventUseCase).execute(req, res)
);

eventRouter.get(
  "/",
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  (req: Request, res: Response) =>
    new ListEventController(listEventsUseCase).execute(req, res)
);

export { eventRouter };
