import { IssueService } from "../services/IssueService";
import { NextRequest, NextResponse } from "next/server";
import { AuthMiddleware } from "../middleware/AuthMiddleware";
import { ValidationError } from "../errors/ValidationError";
export class IssueHandler {
  private service = new IssueService();

  async getAll(req: NextRequest) {
    try {
      const issues = await this.service.getAllIssues();
      return NextResponse.json({ status: "success", data: issues });
    } catch (error) {
      return NextResponse.json({ status: "error", message: "Internal server error" }, { status: 500 });
    }
  }

  async create(req: NextRequest) {
    try {
      const payload: any = await AuthMiddleware.verify(req); // verify JWT
      const body = await req.json();

      const newIssue = await this.service.createIssue({
        ...body,
        userId: payload.userId, // assign logged-in user
      });

      return NextResponse.json({ status: "success", data: newIssue });
    } catch (error) {
      if (error instanceof ValidationError) {
        return NextResponse.json({ status: "error", message: "Unauthorized" }, { status: 401 });
      }
      return NextResponse.json({ status: "error", message: "Internal server error" }, { status: 500 });
    }
  }

  async getById(req: NextRequest, id: string) {
    try {
      const issue = await this.service.getIssueById(id);
      if (!issue) {
        return NextResponse.json({ status: "error", message: "Issue not found" }, { status: 404 });
      }
      return NextResponse.json({ status: "success", data: issue });
    } catch (error) {
      return NextResponse.json({ status: "error", message: "Internal server error" }, { status: 500 });
    }
  }

  async update(req: NextRequest, id: string) {
    try {
      const payload: any = await AuthMiddleware.verify(req); // verify JWT
      const body = await req.json();

      const updatedIssue = await this.service.updateIssue(id, body);
      return NextResponse.json({ status: "success", data: updatedIssue });
    } catch (error) {
      if (error instanceof ValidationError) {
        return NextResponse.json({ status: "error", message: "Unauthorized" }, { status: 401 });
      }
      return NextResponse.json({ status: "error", message: "Internal server error" }, { status: 500 });
    }
  }

  async delete(req: NextRequest, id: string) {
    try {
      const payload: any = await AuthMiddleware.verify(req); // verify JWT

      await this.service.deleteIssue(id);
      return NextResponse.json({ status: "success", message: "Issue deleted" });
    } catch (error) {
      if (error instanceof ValidationError) {
        return NextResponse.json({ status: "error", message: "Unauthorized" }, { status: 401 });
      }
      return NextResponse.json({ status: "error", message: "Internal server error" }, { status: 500 });
    }
  }
}