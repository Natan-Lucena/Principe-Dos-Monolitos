import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import { RifaRepositoryImpl } from "../../../../infraestructure/repositories/rifa-repository-impl";
import { CreateRifaUseCase } from "../use-cases/create-rifa/create-rifa-use-case";
import { CreateRifaController } from "../use-cases/create-rifa/create-rifa-controller";
import { ListRifasUseCase } from "../use-cases/list-rifas/list-rifas-use-case";
import { ListRifasController } from "../use-cases/list-rifas/list-rifas-controller";

const rifasRouter = Router();

const prismaClient = new PrismaClient();
const rifaRepository = new RifaRepositoryImpl(prismaClient);
const createRifaUseCase = new CreateRifaUseCase(rifaRepository);
const listRifasUseCase = new ListRifasUseCase(rifaRepository);

rifasRouter.post("/", (req, res) =>
  new CreateRifaController(createRifaUseCase).execute(req, res)
);

rifasRouter.get("/", async (req, res) =>
  new ListRifasController(listRifasUseCase).execute(req, res)
);

export { rifasRouter };
