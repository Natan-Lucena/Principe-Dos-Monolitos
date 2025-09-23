import { RifaRepository } from "../../../../../domain/repositories/rifa-repository";

export class ListRifasUseCase {
  constructor(private rifaRepository: RifaRepository) {}

  async execute() {
    const rifas = await this.rifaRepository.list();
    return rifas;
  }
}
