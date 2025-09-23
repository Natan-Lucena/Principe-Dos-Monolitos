import { Rifa } from "../../../../../domain/entities/rifa";
import { RifaRepository } from "../../../../../domain/repositories/rifa-repository";

interface CreateRifaRequest {
  number: string;
}

export class CreateRifaUseCase {
  constructor(private rifaRepository: RifaRepository) {}

  async execute(request: CreateRifaRequest): Promise<Rifa> {
    const rifa = Rifa.create({ number: request.number });
    await this.rifaRepository.save(rifa);
    return rifa;
  }
}
