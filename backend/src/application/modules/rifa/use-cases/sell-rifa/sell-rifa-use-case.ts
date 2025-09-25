import { failure, success } from "@wave-telecom/framework/core";
import { User } from "../../../../../domain/entities/user";
import { RifaRepository } from "../../../../../domain/repositories/rifa-repository";

interface SellRifaRequest {
  number: string;
  name: string;
  email: string;
  seller?: User;
}

export class SellRifaUseCase {
  constructor(private rifaRepository: RifaRepository) {}

  async execute(params: SellRifaRequest) {
    const rifa = await this.rifaRepository.find(params.number);

    if (!rifa) {
      return failure("RIFA_NOT_FOUND");
    }
    rifa.markAsSold(params);

    await this.rifaRepository.save(rifa);
    return success(void 0);
  }
}
