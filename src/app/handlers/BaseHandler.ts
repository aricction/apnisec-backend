import { NextResponse } from "next/server";
import { ValidationError } from "../errors/ValidationError";

export abstract class BaseHandler {
  protected async execute(fn: () => Promise<NextResponse>): Promise<NextResponse> {
    try {
      return await fn();
    } catch (error: unknown) {
      if (error instanceof ValidationError) {
        return NextResponse.json({ error: error.message }, { status: 400 });
      }
      if (error instanceof SyntaxError) {
        return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
      }

      console.error("Handler error:", error);
      return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
  }
}
