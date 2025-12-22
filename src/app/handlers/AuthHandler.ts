import { NextRequest, NextResponse } from "next/server";
import { BaseHandler } from "./BaseHandler";
import { AuthValidator } from "../validators/AuthValidator";
import { AuthService } from "../services/AuthService";

export class AuthHandler extends BaseHandler {
  private authService: AuthService;

  constructor(request: NextRequest) {
    super(request);
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

      return NextResponse.json(result, { status: 201 });
    });
  }

  async login(): Promise<NextResponse> {
    return this.execute(async () => {
      const body = await this.req.json();

      AuthValidator.login(body);

      const result = await this.authService.login(
        body.email,
        body.password
      );

      return NextResponse.json(result);
    });
  }

  async me(): Promise<NextResponse> {
    return this.execute(() => {
      return this.authService.me(this.req);
    });
  }

  async logout(): Promise<NextResponse> {
    return this.execute(() => {
      return this.authService.logout();
    });
  }
}
