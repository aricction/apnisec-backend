import { NextResponse } from "next/server";
import { UserRepository } from "../repositories/UserRepository";
import { AuthMiddleware } from "../middleware/AuthMiddleware";
import { ValidationError } from "../errors/ValidationError";

export class UserService {
  private userRepo = new UserRepository();

  async getProfile(request: Request): Promise<NextResponse> {
    //  Use middleware to verify token
    const payload: any = AuthMiddleware.verify(request as any);

    const user = await this.userRepo.findByEmail(payload.email);
    if (!user) throw new Error("User not found");

    const { password, ...safeUser } = user;
    return NextResponse.json({ user: safeUser }, { status: 200 });
  }

  async updateProfile(request: Request): Promise<NextResponse> {
    const payload: any = AuthMiddleware.verify(request as any);
    const body = await request.json();

    const user = await this.userRepo.findByEmail(payload.email);
    if (!user) throw new ValidationError("User not found");

    // Validate required fields for PUT (all fields must be present)
    if (!body.name && !body.email) {
      throw new ValidationError("At least one field (name or email) is required to update");
    }

    const updateData: any = {};
    if (body.name) updateData.name = body.name;
    if (body.email) updateData.email = body.email;

    const updatedUser = await this.userRepo.update(user.id, updateData);
    const { password, ...safeUser } = updatedUser;

    return NextResponse.json({ user: safeUser }, { status: 200 });
  }
}
