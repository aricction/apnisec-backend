import { AuthHandler } from "@/app/handlers/AuthHandler";

export const runtime = "nodejs";

const handler = new AuthHandler();

export async function GET(request: Request) {
  return handler.me(request);
}
