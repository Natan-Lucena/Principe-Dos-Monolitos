import { RifaRepository } from "../../../../../domain/repositories/rifa-repository";

export class ListRifasUseCase {
  constructor(private rifaRepository: RifaRepository) {}

  async execute() {
    const rifas = await this.rifaRepository.list();

    const sortedRifas = rifas.sort((a, b) => {
      return parseInt(a.id) - parseInt(b.id);
    });

    return sortedRifas;
  }
}
