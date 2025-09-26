import {
  BaseController,
  formatValidationErrors,
} from "@wave-telecom/framework/controllers";
import { SignUpUserUseCase } from "./sign-up-user-use-case";
import { Request, Response } from "express";
import { signUpUserSchema } from "../../schemas/sign-up-user-schema";

export class SignUpUserController extends BaseController {
  constructor(private useCase: SignUpUserUseCase) {
    super();
  }

  async executeImpl(req: Request, res: Response) {
    const validation = await signUpUserSchema.safeParseAsync(req.body);

    if (!validation.success) {
      const errors = formatValidationErrors(validation.error);
      return this.clientError(res, undefined, errors);
    }

    const payload = validation.data;

    const result = await this.useCase.execute(payload);

    if (!result.ok) {
      switch (result.error) {
        case "USER_ALREADY_EXISTS":
          return this.clientError(res, result.error);
        default:
          throw new Error("INTERNAL_SERVER_ERROR");
      }
    }

    return this.created(res, result.value);
  }
}
