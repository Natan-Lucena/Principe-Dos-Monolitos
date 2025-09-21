import { BaseController } from "@wave-telecom/framework/controllers";
import { ListEventUseCase } from "./list-events-use-case";
import { Request, Response } from "express";

export class ListEventController extends BaseController {
  constructor(private listEventUseCase: ListEventUseCase) {
    super();
  }

  async executeImpl(req: Request, res: Response): Promise<Response | void> {
    const events = await this.listEventUseCase.execute();
    return this.ok(res, events);
  }
}
