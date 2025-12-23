import bcrypt from "bcryptjs";
import { prisma } from "../prisma/prismaClient";

export class UserRepository {
  async create(data: { email: string; password: string; name?: string }) {

    return prisma.user.create({
      data: {
        email: data.email,
        password: data.password,
        name: data.name ?? "",
      },
    });
  }

  async findByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
    });
  }

    async findById(id: string) {
    return prisma.user.findUnique({
      where: { id },
    });
  }
  
  async update(userId: string, data: Partial<{ name: string; email: string; password: string }>) {
    return prisma.user.update({
      where: { id: userId },
      data,
    });
  }
}
