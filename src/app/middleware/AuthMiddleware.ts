import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { ValidationError } from "../errors/ValidationError";
const JWT_SECRET = process.env.JWT_SECRET || "super-secret";

export class AuthMiddleware {
  static async verify(request: NextRequest) {
    
    const authHeader = request.headers.get("authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new ValidationError("Authorization token missing");
    }

    const token = authHeader.split(" ")[1];

    try {
      const payload = jwt.verify(token, JWT_SECRET);
      return payload; // can return decoded user info
    } catch {
      throw new ValidationError("Invalid or expired token");
    }
  }
}
