// src/app/api/auth/register/route.ts
import { NextRequest } from "next/server";
import { AuthHandler } from "@/app/handlers/AuthHandler";
import { Cors } from "@/app/utils/Cors";

export const runtime = "nodejs";

export async function OPTIONS(req: NextRequest) {
  return Cors.preflight(req.headers.get("origin") ?? undefined);
}

export async function POST(req: NextRequest) {
  const handler = new AuthHandler(req);
  return handler.register();
}
