// src/app/utils/Cors.ts
import { NextRequest, NextResponse } from "next/server";

export class Cors {
  private static allowedOrigins = [
    "http://apnisec-frontend.vercel.app" , 
    "http://localhost:3000"];

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

  static apply(res: NextResponse, origin?: string) {
    const headers = this.headers(origin);
    Object.entries(headers).forEach(([key, value]) => {
      res.headers.set(key, value);
    });
  }
}

// ✅ SAFE withCors (DOES NOT TOUCH BODY)
export async function withCors(
  req: NextRequest,
  handler: (req: NextRequest) => Promise<NextResponse>
) {
  const response = await handler(req);

  const origin = req.headers.get("origin") ?? undefined;
  Cors.apply(response, origin);

  return response;
}
