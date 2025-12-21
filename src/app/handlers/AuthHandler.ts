import { AuthValidator } from "../validators/AuthValidator";
import { AuthService } from "../services/AuthService";
import { NextRequest, NextResponse } from "next/server";
export class AuthHandler {
    private authService = new AuthService();

    async Register(request: Request) {
        try {
            const body = await request.json();
            AuthValidator.register(body);

            const result = await this.authService.register(
                body.name,
                body.email,
                body.password
            );

            return Response.json(result, { status: 201 });
        } catch (error: any) {
            // Re-throw to be handled by route handler
            throw error;
        }
    }

    async Login(request: Request) {
        const body = await request.json();

        AuthValidator.login(body);
        const result = await this.authService.login(
            body.email,
            body.password
        );
        return Response.json(result);
    }

    async me(request: Request) : Promise<NextResponse>{
        return this.authService.me(request);
    }

    async Logout() :Promise<NextResponse> {
        return this.authService.logout();
    }

}
