import { NextResponse } from "next/server";
import { UserRepository } from "../repositories/UserRepository";
import { AuthMiddleware } from "../middleware/AuthMiddleware";

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
}
