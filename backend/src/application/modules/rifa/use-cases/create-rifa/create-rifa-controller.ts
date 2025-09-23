import {
  BaseController,
  formatValidationErrors,
} from "@wave-telecom/framework/controllers";
import { CreateRifaUseCase } from "./create-rifa-use-case";
import { Request, Response } from "express";
import { createRifaSchema } from "../../schemas/create-rifa-schema";

export class CreateRifaController extends BaseController {
  constructor(private useCase: CreateRifaUseCase) {
    super();
  }

  async executeImpl(req: Request, res: Response): Promise<Response | void> {
    const { number } = req.body;
    const validation = await createRifaSchema.safeParseAsync({ number });

    if (!validation.success) {
      const errors = formatValidationErrors(validation.error);
      return this.clientError(res, undefined, errors);
    }

    const rifa = await this.useCase.execute({ number });
    return res.status(201).json(rifa);
  }
}
