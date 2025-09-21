import { PrismaClient } from "@prisma/client";
import { Event } from "../../domain/entities/event";
import { EventRepository } from "../../domain/repositories/event-repository";
import { Uuid } from "@wave-telecom/framework/core";

export class EventRepositoryImpl implements EventRepository {
  constructor(private prisma: PrismaClient) {}
  async list(): Promise<Event[]> {
    const result = await this.prisma.event.findMany();
    return result.map((event: any) => {
      return new Event(
        new Uuid(event.id),
        event.name,
        event.date,
        event.createdAt
      );
    });
  }

  async save(event: Event): Promise<Event> {
    await this.prisma.event.upsert({
      where: { id: event.id.value },
      create: {
        id: event.id.value,
        name: event.name,
        date: event.date,
        createdAt: event.createdAt,
      },
      update: {
        name: event.name,
        date: event.date,
      },
    });
    return event;
  }
}
