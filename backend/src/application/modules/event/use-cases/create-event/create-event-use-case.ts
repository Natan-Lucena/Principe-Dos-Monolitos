import { Event } from "../../../../../domain/entities/event";
import { EventRepository } from "../../../../../domain/repositories/event-repository";

interface CreateEventDTO {
  name: string;
  date: Date;
}

export class CreateEventUseCase {
  constructor(private eventRepository: EventRepository) {}

  async execute(data: CreateEventDTO) {
    const event = Event.create({
      ...data,
      createdAt: new Date(),
    });
    const result = await this.eventRepository.save(event);
    return result;
  }
}
