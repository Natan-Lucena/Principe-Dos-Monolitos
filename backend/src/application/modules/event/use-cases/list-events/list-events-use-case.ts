import { EventRepository } from "../../../../../domain/repositories/event-repository";

export class ListEventUseCase {
  constructor(private eventRepository: EventRepository) {}

  async execute() {
    const events = await this.eventRepository.list();
    return events;
  }
}
