import { PrismaClient } from "@prisma/client";
import { RifaRepository } from "../../domain/repositories/rifa-repository";
import { Rifa } from "../../domain/entities/rifa";
import { User } from "../../domain/entities/user";
import { Uuid } from "@wave-telecom/framework/core";

export class RifaRepositoryImpl implements RifaRepository {
  constructor(private prisma: PrismaClient) {}
  async save(rifa: Rifa): Promise<Rifa> {
    await this.prisma.rifa.upsert({
      where: { number: rifa.id },
      update: {
        sold: rifa.isSold(),
        createdAt: rifa.createdAt,
        name: rifa.getName,
        email: rifa.getEmail,
      },
      create: {
        number: rifa.id,
        sold: rifa.isSold(),
        createdAt: rifa.createdAt,
        name: rifa.getName,
        email: rifa.getEmail,
      },
    });
    return rifa;
  }
  async list(): Promise<Rifa[]> {
    const result = await this.prisma.rifa.findMany({
      include: { seller: true },
    });

    return result.map((rifa) => {
      const seller = rifa.seller;
      return new Rifa(
        rifa.number,
        rifa.sold,
        rifa.createdAt,
        rifa.name ?? undefined,
        rifa.email ?? undefined,
        seller
          ? new User(
              new Uuid(seller.id),
              seller.name,
              seller.email,
              seller.password,
              seller.createdAt
            )
          : undefined
      );
    });
  }
}
