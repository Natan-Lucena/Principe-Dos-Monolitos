import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import { RifaRepositoryImpl } from "../../../../infraestructure/repositories/rifa-repository-impl";
import { CreateRifaUseCase } from "../use-cases/create-rifa/create-rifa-use-case";
import { CreateRifaController } from "../use-cases/create-rifa/create-rifa-controller";

const rifasRouter = Router();

const prismaClient = new PrismaClient();
const rifaRepository = new RifaRepositoryImpl(prismaClient);
const createRifaUseCase = new CreateRifaUseCase(rifaRepository);

rifasRouter.post("/", (req, res) =>
  new CreateRifaController(createRifaUseCase).execute(req, res)
);

export { rifasRouter };
