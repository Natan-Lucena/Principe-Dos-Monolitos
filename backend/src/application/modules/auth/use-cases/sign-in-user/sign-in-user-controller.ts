import {
  BaseController,
  formatValidationErrors,
} from "@wave-telecom/framework/controllers";
import { SignInUserUseCase } from "./sign-in-user-use-case";
import { Request, Response } from "express";
import { signInUserSchema } from "../../schemas/sign-in-user-schema";

export class SignInUserController extends BaseController {
  constructor(private useCase: SignInUserUseCase) {
    super();
  }

  async executeImpl(req: Request, res: Response): Promise<unknown> {
    const validation = await signInUserSchema.safeParseAsync(req.body);

    if (!validation.success) {
      const errors = formatValidationErrors(validation.error);
      return this.clientError(res, undefined, errors);
    }

    const payload = validation.data;

    const result = await this.useCase.execute(payload);

    if (!result.ok) {
      return this.clientError(res);
    }

    return this.ok(res, result.value);
  }
}
