import { User } from "./user";

interface RifaProps {
  number: string;
  name: string;
  email: string;
  createdAt: Date;
}

interface SellRifaProps {
  seller: User;
  name: string;
  email: string;
}

export class Rifa {
  constructor(
    readonly id: string,
    private sold: boolean,
    readonly createdAt: Date,
    private name?: string,
    private email?: string,
    private seller?: User
  ) {}

  static create(props: RifaProps): Rifa {
    return new Rifa(
      props.number,
      false,
      props.createdAt,
      props.name,
      props.email
    );
  }

  isSold(): boolean {
    return this.sold;
  }

  markAsSold(props: SellRifaProps): void {
    this.sold = true;
    this.seller = props.seller;
    this.name = props.name;
    this.email = props.email;
  }

  get getName(): string | undefined {
    return this.name;
  }
  get getEmail(): string | undefined {
    return this.email;
  }
}
