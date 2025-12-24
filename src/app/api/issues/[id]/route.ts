
import { NextRequest } from "next/server";
import { IssueHandler } from "@/app/handlers/IssueHandler";
import { Cors, withCors } from "@/app/utils/Cors";

export const runtime = "nodejs";

const handler = new IssueHandler();

export async function OPTIONS(req: NextRequest) {
  return Cors.preflight(req.headers.get("origin") ?? undefined);
}

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  return withCors(req, async () => handler.getById(req, params.id));
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  return withCors(req, async (req) => handler.update(req, params.id));
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  return withCors(req, async (req) => handler.delete(req, params.id));
}

/* 👇 REQUIRED to satisfy TS module detection in Next build */
export {};