// src/app/api/issues/route.ts
import { NextRequest } from "next/server";
import { IssueHandler } from "@/app/handlers/IssueHandler";
import { Cors, withCors } from "@/app/utils/Cors";

export const runtime = "nodejs";


export async function OPTIONS(req: NextRequest) {
  return Cors.preflight(req.headers.get("origin") ?? undefined);
}

export async function GET(request: NextRequest) {
  return withCors(request, async () => {
     const handler = new IssueHandler();
    return handler.getAll(request);
  });
}

export async function POST(request: NextRequest) {
  return withCors(request, async () => {
    const handler = new IssueHandler();
    return handler.create(request);
  });
}
