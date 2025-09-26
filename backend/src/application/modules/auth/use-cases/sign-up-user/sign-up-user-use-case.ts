import { failure, success } from "@wave-telecom/framework/core";
import { UserRepository } from "../../../../../domain/repositories/user-repository";
import bcrypt from "bcryptjs";
import { User } from "../../../../../domain/entities/user";
import { JwtService } from "../../services/jwt-service";
export interface SignUpUserRequest {
  id: string;
  name: string;
  email: string;
  password: string;
}

export class SignUpUserUseCase {
  constructor(
    private repository: UserRepository,
    private jwtService: JwtService
  ) {}

  async execute(params: SignUpUserRequest) {
    const userAlreadyExists = await this.repository.search({
      email: params.name,
    });

    if (userAlreadyExists[0]) {
      return failure("USER_ALREADY_EXISTS");
    }

    const hash = await bcrypt.hash(params.password, 10);

    const user = User.create({
      id: params.id,
      email: params.email,
      password: hash,
      name: params.name,
    });

    await this.repository.save(user);

    const token = await this.jwtService.generateToken(user);

    return success({ token });
  }
}
