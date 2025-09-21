import { Event } from "../entities/event";

export interface EventRepository {
  save(event: Event): Promise<Event>;
  list(): Promise<Event[]>;
}
