import { UserHandler } from "@/app/handlers/UserHandler";

export const runtime = "nodejs";

const handler = new UserHandler();

export async function GET(request: Request) {
  return handler.profile(request);
}
