import type { Request, Response } from "express";
import {
  BaseController,
  formatValidationErrors,
} from "@wave-telecom/framework/controllers";
import { CreateEventUseCase } from "./create-event-use-case";
import { createEventSchema } from "../../schemas/create-event-schema";

export class CreateEventController extends BaseController {
  constructor(private createEventUseCase: CreateEventUseCase) {
    super();
  }

  async executeImpl(req: Request, res: Response): Promise<Response | void> {
    const { name, date } = req.body;
    const validation = await createEventSchema.safeParseAsync({
      name,
      date: new Date(date),
    });

    if (!validation.success) {
      const errors = formatValidationErrors(validation.error);
      return this.clientError(res, undefined, errors);
    }

    const result = await this.createEventUseCase.execute(validation.data);
    return this.created(res, result);
  }
}
