import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import { RifaRepositoryImpl } from "../../../../infraestructure/repositories/rifa-repository-impl";
import { CreateRifaUseCase } from "../use-cases/create-rifa/create-rifa-use-case";
import { CreateRifaController } from "../use-cases/create-rifa/create-rifa-controller";
import { ListRifasUseCase } from "../use-cases/list-rifas/list-rifas-use-case";
import { ListRifasController } from "../use-cases/list-rifas/list-rifas-controller";
import { SellRifaUseCase } from "../use-cases/sell-rifa/sell-rifa-use-case";
import { SellRifaController } from "../use-cases/sell-rifa/sell-rifa-controller";

const rifasRouter = Router();

const prismaClient = new PrismaClient();
const rifaRepository = new RifaRepositoryImpl(prismaClient);
const createRifaUseCase = new CreateRifaUseCase(rifaRepository);
const listRifasUseCase = new ListRifasUseCase(rifaRepository);
const sellRifaUseCase = new SellRifaUseCase(rifaRepository);

rifasRouter.post("/", (req, res) =>
  new CreateRifaController(createRifaUseCase).execute(req, res)
);

rifasRouter.get("/", async (req, res) =>
  new ListRifasController(listRifasUseCase).execute(req, res)
);

rifasRouter.put("/sell", async (req, res) =>
  new SellRifaController(sellRifaUseCase).execute(req, res)
);

export { rifasRouter };
