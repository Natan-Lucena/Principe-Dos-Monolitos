import { PrismaClient } from "@prisma/client";
import { Request, Response, Router } from "express";
import { UserRepositoryImpl } from "../../../../infraestructure/repositories/user-repository-impl";
import { JwtService } from "../services/jwt-service";
import { SignUpUserUseCase } from "../use-cases/sign-up-user/sign-up-user-use-case";
import { SignUpUserController } from "../use-cases/sign-up-user/sign-up-user-controller";

const authRouter = Router();

const prismaClient = new PrismaClient();
const userRepository = new UserRepositoryImpl(prismaClient);
const jwtService = new JwtService(userRepository);

const signUpUserUseCase = new SignUpUserUseCase(userRepository, jwtService);

authRouter.post("/sign-up", (req: Request, res: Response) =>
  new SignUpUserController(signUpUserUseCase).execute(req, res)
);

export { authRouter };
