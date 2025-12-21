import bcrypt from "bcryptjs";
import { prisma } from "../prisma/prismaClient";
export class UserRepository {
  async create(data: { email: string; password: string; name?: string }) {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    return prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        name: data.name ?? "",
      },
    });
  }

  async findByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
    });
  }
}
