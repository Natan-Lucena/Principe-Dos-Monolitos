import { BaseController } from "@wave-telecom/framework/controllers";
import { ListRifasUseCase } from "./list-rifas-use-case";
import { Request, Response } from "express";

export class ListRifasController extends BaseController {
  constructor(private listRifasUseCase: ListRifasUseCase) {
    super();
  }

  async executeImpl(req: Request, res: Response) {
    const rifas = await this.listRifasUseCase.execute();
    return this.ok(res, rifas);
  }
}
