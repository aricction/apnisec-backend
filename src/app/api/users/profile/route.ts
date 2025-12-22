import { NextRequest } from "next/server";
import { UserHandler } from "@/app/handlers/UserHandler";
import { Cors } from "@/app/utils/Cors";

export const runtime = "nodejs";

export async function OPTIONS(req: NextRequest) {
  return Cors.preflight(req.headers.get("origin") ?? undefined);
}

export async function GET(req: NextRequest) {
  const handler = new UserHandler(req); 

  return  handler.profile();
}

export async function PUT(req: NextRequest) {
  const handler = new UserHandler(req);

  return  handler.updateProfile();
}
