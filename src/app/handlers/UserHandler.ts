import { BaseHandler } from "./BaseHandler";
import { UserService } from "../services/UserService";
import { NextResponse } from "next/server";

export class UserHandler extends BaseHandler {
  private userService = new UserService();

  async profile(): Promise<NextResponse> {
    return this.userService.getProfile(this.req);
  }

  async updateProfile(): Promise<NextResponse> {
    return this.userService.updateProfile(this.req);
  }
}
