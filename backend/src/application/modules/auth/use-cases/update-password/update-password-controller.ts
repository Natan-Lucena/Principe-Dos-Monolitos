import {
  BaseController,
  formatValidationErrors,
} from "@wave-telecom/framework/controllers";
import { UpdatePasswordUseCase } from "./update-password-use-case";
import { Request, Response } from "express";
import { updatePasswordSchema } from "../../schemas/update-password-schema";

export class UpdatePasswordController extends BaseController {
  constructor(private useCase: UpdatePasswordUseCase) {
    super();
  }

  async executeImpl(req: Request, res: Response): Promise<unknown> {
    const validation = await updatePasswordSchema.safeParseAsync(req.body);

    if (!validation.success) {
      const errors = formatValidationErrors(validation.error);
      return this.clientError(res, undefined, errors);
    }

    const payload = validation.data;

    const result = await this.useCase.execute(payload);

    if (!result.ok) {
      return this.clientError(res, "BAD_REQUEST");
    }

    return this.noContent(res);
  }
}
