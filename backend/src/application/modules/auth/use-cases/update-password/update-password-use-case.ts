import { failure, success } from "@wave-telecom/framework/core";
import { UserRepository } from "../../../../../domain/repositories/user-repository";
import bcrypt from "bcryptjs";

interface UpdatePasswordProps {
  id: string;
  email: string;
  password: string;
}

export class UpdatePasswordUseCase {
  constructor(private repository: UserRepository) {}

  async execute(props: UpdatePasswordProps) {
    const [user] = await this.repository.search({ id: props.id });

    if (user.email != props.email) {
      return failure("EMAIL_IS_NOT_THE_SAME");
    }

    const hash = await bcrypt.hash(props.password, 10);

    user.updatePassword(hash);

    await this.repository.save(user);
    return success(void 0);
  }
}
