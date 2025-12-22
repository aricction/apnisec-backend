import { AuthHandler } from "@/app/handlers/AuthHandler";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const handler = new AuthHandler(request as any);
  return handler.me();
}
