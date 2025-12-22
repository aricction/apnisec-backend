// src/app/utils/Cors.ts
import { NextResponse } from "next/server";

export class Cors {
  private static allowedOrigins = ["http://localhost:3000"];

  static headers(origin?: string) {
    const allowedOrigin = this.allowedOrigins.includes(origin ?? "")
      ? origin
      : this.allowedOrigins[0];

    return {
      "Access-Control-Allow-Origin": allowedOrigin!,
      "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Allow-Credentials": "true",
    };
  }

  static preflight(origin?: string) {
    return new NextResponse(null, {
      status: 204,
      headers: this.headers(origin),
    });
  }
}

export async function withCors(
  req: Request | any,
  handler: (req: any) => Promise<NextResponse>
) {
  const origin = req.headers.get?.("origin") ?? undefined;

  if (req.method === "OPTIONS") {
    return Cors.preflight(origin);
  }

  const response = await handler(req);

  const headers = Cors.headers(origin);
  Object.entries(headers).forEach(([key, value]) => response.headers.set(key, value));

  return response;
}
