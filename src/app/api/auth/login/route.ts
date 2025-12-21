import { AuthHandler } from "@/app/handlers/AuthHandler";
export const runtime = "nodejs";

const handler = new AuthHandler();

export async function POST(request: Request) {
  return handler.Login(request);
}
