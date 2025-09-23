import { Uuid } from "@wave-telecom/framework/core";

interface EventProps {
  name: string;
  date: Date;
}

export class Event {
  constructor(
    readonly id: Uuid,
    readonly name: string,
    readonly date: Date,
    readonly createdAt: Date
  ) {}

  static create(props: EventProps): Event {
    return new Event(Uuid.random(), props.name, props.date, new Date());
  }
}
