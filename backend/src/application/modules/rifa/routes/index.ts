import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import { RifaRepositoryImpl } from "../../../../infraestructure/repositories/rifa-repository-impl";
import { CreateRifaUseCase } from "../use-cases/create-rifa/create-rifa-use-case";
import { CreateRifaController } from "../use-cases/create-rifa/create-rifa-controller";
import { ListRifasUseCase } from "../use-cases/list-rifas/list-rifas-use-case";
import { ListRifasController } from "../use-cases/list-rifas/list-rifas-controller";
import { SellRifaUseCase } from "../use-cases/sell-rifa/sell-rifa-use-case";
import { SellRifaController } from "../use-cases/sell-rifa/sell-rifa-controller";
import { UserRepositoryImpl } from "../../../../infraestructure/repositories/user-repository-impl";
import { JwtService } from "../../auth/services/jwt-service";
import { authMiddleware } from "../../../../infraestructure/middlewares/auth-middleware";

const rifasRouter = Router();

const prismaClient = new PrismaClient();
const rifaRepository = new RifaRepositoryImpl(prismaClient);
const userRepository = new UserRepositoryImpl(prismaClient);
const jwtService = new JwtService(userRepository);
const createRifaUseCase = new CreateRifaUseCase(rifaRepository);
const listRifasUseCase = new ListRifasUseCase(rifaRepository);
const sellRifaUseCase = new SellRifaUseCase(rifaRepository);

rifasRouter.post("/", authMiddleware(jwtService), (req, res) =>
  new CreateRifaController(createRifaUseCase).execute(req, res)
);

rifasRouter.get("/", authMiddleware(jwtService), async (req, res) =>
  new ListRifasController(listRifasUseCase).execute(req, res)
);

rifasRouter.put("/sell", authMiddleware(jwtService), async (req, res) =>
  new SellRifaController(sellRifaUseCase).execute(req, res)
);

export { rifasRouter };
