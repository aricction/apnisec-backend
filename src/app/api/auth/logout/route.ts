import { AuthHandler } from "@/app/handlers/AuthHandler";
import { NextRequest } from "next/server";
import { Cors } from "@/app/utils/Cors";

export const runtime = "nodejs";

export async function OPTIONS(req: NextRequest) {
  return Cors.preflight(req.headers.get("origin") ?? undefined);
}

export async function POST(req: NextRequest) {
  const handler = new AuthHandler(req);
  return handler.logout();
}
