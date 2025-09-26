import { PrismaClient } from "@prisma/client";
import { User } from "../../domain/entities/user";
import {
  UserRepository,
  UserSearchParams,
} from "../../domain/repositories/user-repository";
import { Uuid } from "@wave-telecom/framework/core";

export class UserRepositoryImpl implements UserRepository {
  constructor(private prisma: PrismaClient) {}
  async search(params: UserSearchParams): Promise<User[]> {
    const result = await this.prisma.user.findMany({
      where: {
        ...(params.email ? { email: params.email } : {}),
        ...(params.name ? { name: params.name } : {}),
      },
    });
    return result.map((user: any) => {
      return new User(
        user.id,
        user.name,
        user.email,
        user.password,
        user.createdAt
      );
    });
  }

  async save(user: User): Promise<User> {
    await this.prisma.user.upsert({
      where: { id: user.id },
      create: {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
        createdAt: user.createdAt,
      },
      update: {
        name: user.name,
        email: user.email,
        password: user.password,
        createdAt: user.createdAt,
      },
    });
    return user;
  }
}
