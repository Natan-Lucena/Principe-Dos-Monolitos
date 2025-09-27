import { PrismaClient } from "@prisma/client";
import { Request, Response, Router } from "express";
import { UserRepositoryImpl } from "../../../../infraestructure/repositories/user-repository-impl";
import { JwtService } from "../services/jwt-service";
import { SignUpUserUseCase } from "../use-cases/sign-up-user/sign-up-user-use-case";
import { SignUpUserController } from "../use-cases/sign-up-user/sign-up-user-controller";
import { SignInUserUseCase } from "../use-cases/sign-in-user/sign-in-user-use-case";
import { SignInUserController } from "../use-cases/sign-in-user/sign-in-user-controller";
import { UpdatePasswordUseCase } from "../use-cases/update-password/update-password-use-case";
import { UpdatePasswordController } from "../use-cases/update-password/update-password-controller";

const authRouter = Router();

const prismaClient = new PrismaClient();
const userRepository = new UserRepositoryImpl(prismaClient);
const jwtService = new JwtService(userRepository);

const signUpUserUseCase = new SignUpUserUseCase(userRepository, jwtService);
const signInUserUseCase = new SignInUserUseCase(userRepository, jwtService);
const updatePasswordUseCase = new UpdatePasswordUseCase(userRepository);

authRouter.post("/sign-up", (req: Request, res: Response) =>
  new SignUpUserController(signUpUserUseCase).execute(req, res)
);

authRouter.post("/sign-in", (req: Request, res: Response) =>
  new SignInUserController(signInUserUseCase).execute(req, res)
);

authRouter.put("/update-password", (req: Request, res: Response) =>
  new UpdatePasswordController(updatePasswordUseCase).execute(req, res)
);

export { authRouter };
