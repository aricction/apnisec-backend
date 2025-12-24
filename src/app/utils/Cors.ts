import { NextRequest, NextResponse } from "next/server";

export class Cors {
  private static allowedOrigins = [
    "https://apnisec-frontend.vercel.app",
    "http://localhost:3000",
  ];

  static headers(origin?: string) {
    const headers: Record<string, string> = {
      "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Allow-Credentials": "true",
    };

    // ✅ Only set origin if it is allowed
    if (origin && this.allowedOrigins.includes(origin)) {
      headers["Access-Control-Allow-Origin"] = origin;
    }

    return headers;
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

// ✅ SAFE withCors
export async function withCors(
  req: NextRequest,
  handler: (req: NextRequest) => Promise<NextResponse>
) {
  const origin = req.headers.get("origin") ?? undefined;

  // ✅ Handle preflight FIRST
  if (req.method === "OPTIONS") {
    return Cors.preflight(origin);
  }

  const response = await handler(req);
  Cors.apply(response, origin);

  return response;
}
