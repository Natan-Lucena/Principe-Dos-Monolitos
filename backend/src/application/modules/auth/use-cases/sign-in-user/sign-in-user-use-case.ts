import { failure, success } from "@wave-telecom/framework/core";
import { UserRepository } from "../../../../../domain/repositories/user-repository";
import { JwtService } from "../../services/jwt-service";
import bcrypt from "bcryptjs";

interface SignInUserRequest {
  id: string;
  password: string;
}

export class SignInUserUseCase {
  constructor(
    private repository: UserRepository,
    private jwtService: JwtService
  ) {}

  async execute(params: SignInUserRequest) {
    const [user] = await this.repository.search({ id: params.id });

    if (!user) {
      return failure("USER_NOT_FOUND");
    }

    const isPasswordValid = await bcrypt.compare(
      params.password,
      user.password
    );

    if (!isPasswordValid) {
      return failure("INVALID_CREDENTIALS");
    }

    const token = await this.jwtService.generateToken(user);
    return success({ token });
  }
}
