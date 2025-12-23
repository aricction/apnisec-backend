// src/app/handlers/AuthHandler.ts
import { NextRequest, NextResponse } from "next/server";
import { BaseHandler } from "./BaseHandler";
import { AuthValidator } from "../validators/AuthValidator";
import { AuthService } from "../services/AuthService";

export class AuthHandler extends BaseHandler {
  private authService: AuthService;

  constructor(req: NextRequest) {
    super(req);
    this.authService = new AuthService();
  }

  async register(): Promise<NextResponse> {
    return this.execute(async () => {
      const body = await this.req.json();
      AuthValidator.register(body);
      const result = await this.authService.register(
        body.name,
        body.email,
        body.password
      );
      return this.json(result, 201);
    });
  }

async login(): Promise<NextResponse> {
  return this.execute(async () => {
    const body = await this.req.json();
    
    body.email = String(body.email);
    body.password = String(body.password);

    AuthValidator.login(body);

    const result = await this.authService.login(
      body.email,
      body.password
    );

    return this.json(result);
  });
}


  async me(): Promise<NextResponse> {
  return this.execute(async () => {
    const result = await this.authService.me(this.req);
    return this.json(result); // wrap in NextResponse
  });
}


 async logout(): Promise<NextResponse> {
  return this.execute(async () => {
    const result = await this.authService.logout();
    return this.json(result); // wrap in NextResponse
  });
}

}
