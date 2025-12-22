import { AuthHandler } from "@/app/handlers/AuthHandler";
import { NextRequest } from "next/server";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const handler = new AuthHandler(request); 
  return handler.login(); 
}
