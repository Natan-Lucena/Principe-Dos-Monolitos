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
    // Limitação do monngo atlas free: não suporta upsert
    const existing = await this.prisma.event.findUnique({
      where: { id: event.id.value },
    });

    if (existing) {
      await this.prisma.event.update({
        where: { id: event.id.value },
        data: {
          name: event.name,
          date: event.date,
        },
      });
    } else {
      await this.prisma.event.create({
        data: {
          id: event.id.value,
          name: event.name,
          date: event.date,
          createdAt: event.createdAt,
        },
      });
    }

    return event;
  }
}
