// src/app/api/auth/login/route.ts
import { NextRequest } from "next/server";
import { AuthHandler } from "@/app/handlers/AuthHandler";
import { Cors, withCors } from "@/app/utils/Cors";

export const runtime = "nodejs";

export async function OPTIONS(req: NextRequest) {
  return Cors.preflight(req.headers.get("origin") ?? undefined);
}

export async function POST(request: NextRequest) {
  return withCors(request, async (req) => {
    const handler = new AuthHandler(req);
    return handler.login();
  });
}
