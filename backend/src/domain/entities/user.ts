interface UserProps {
  id: string;
  name: string;
  email: string;
  password: string;
}

export class User {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly email: string,
    readonly password: string,
    readonly createdAt: Date
  ) {}

  static create(props: UserProps): User {
    return new User(
      props.id,
      props.name,
      props.email,
      props.password,
      new Date()
    );
  }
}
