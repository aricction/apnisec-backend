// src/app/handlers/BaseHandler.ts
import { NextRequest, NextResponse } from "next/server";
import { ValidationError } from "../errors/ValidationError";
import { Cors } from "../utils/Cors";

export abstract class BaseHandler {
  protected req: NextRequest;

  constructor(req: NextRequest) {
    this.req = req;
  }

  protected async execute(
    fn: () => Promise<NextResponse>
  ): Promise<NextResponse> {
    try {
      return await fn();
    } catch (error: unknown) {
      console.error("Handler error:", error);

      if (error instanceof ValidationError) {
        return this.errorResponse(error.message, 400);
      }

      if (error instanceof SyntaxError) {
        return this.errorResponse("Invalid JSON", 400);
      }

      return this.errorResponse("Internal server error", 500);
    }
  }

  protected json(data: any, status = 200): NextResponse {
    return NextResponse.json(data, {
      status,
      headers: Cors.headers(this.req.headers.get("origin") ?? undefined),
    });
  }

  private errorResponse(message: string, status: number): NextResponse {
    return NextResponse.json(
      { error: message },
      {
        status,
        headers: Cors.headers(this.req.headers.get("origin") ?? undefined),
      }
    );
  }
}
