import { Uuid } from "@wave-telecom/framework/core";

interface UserProps {
  name: string;
  email: string;
  password: string;
}

export class User {
  constructor(
    readonly id: Uuid,
    readonly name: string,
    readonly email: string,
    readonly password: string
  ) {}

  static create(props: UserProps): User {
    return new User(Uuid.random(), props.name, props.email, props.password);
  }
}
