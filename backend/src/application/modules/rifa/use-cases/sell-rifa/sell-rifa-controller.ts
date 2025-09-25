import {
  BaseController,
  formatValidationErrors,
} from "@wave-telecom/framework/controllers";
import { SellRifaUseCase } from "./sell-rifa-use-case";
import { Request, Response } from "express";
import { sellRifaSchema } from "../../schemas/sell-rifa-schema";

export class SellRifaController extends BaseController {
  constructor(private useCase: SellRifaUseCase) {
    super();
  }

  async executeImpl(req: Request, res: Response): Promise<Response | void> {
    const validation = await sellRifaSchema.safeParseAsync(req.body);
    if (!validation.success) {
      const errors = formatValidationErrors(validation.error);
      return this.clientError(res, undefined, errors);
    }
    const payload = validation.data;

    const result = await this.useCase.execute(payload);
    if (!result.ok) {
      switch (result.error) {
        case "RIFA_NOT_FOUND":
          return this.notFound(res, result.error);
        default:
          throw new Error("INTERNAL_SERVER_ERROR");
      }
    }
    return this.noContent(res);
  }
}
