// src/app/services/AuthService.ts
import { UserRepository } from "../repositories/UserRepository";
import { PasswordUtil } from "../utils/PasswordUtil";
import { JwtUtil } from "../utils/JwtUtil";
import { ValidationError } from "../errors/ValidationError";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Cors } from "../utils/Cors";
const JWT_SECRET = process.env.JWT_SECRET!;

export class AuthService {
  private userRepo = new UserRepository();

  // ---------------------------
  // REGISTER
  // ---------------------------
  async register(name: string, email: string, password: string) {
    const normalizedEmail = email.trim().toLowerCase();

    const existingUser = await this.userRepo.findByEmail(normalizedEmail);
    if (existingUser) {
      throw new ValidationError("User already exists");
    }

    const hashedPassword = await PasswordUtil.hash(password);
    const newUser = await this.userRepo.create({
      name,
      email: normalizedEmail,
      password: hashedPassword,
    });

    const token = JwtUtil.sign({ userId: newUser.id });

    const { password: _, ...safeUser } = newUser;

    return {
      status: "success",
      data: { user: safeUser, token },
      message: "User registered successfully",
    };
  }

  // ---------------------------
  // LOGIN
  // ---------------------------
  async login(email: string, password: string) {
    const normalizedEmail = email.trim().toLowerCase();
    const user = await this.userRepo.findByEmail(normalizedEmail);
     
    if (!user) {
      throw new ValidationError("Invalid credentials");
    }

    const valid = await PasswordUtil.compare(password, user.password);
    if (!valid) {
      throw new ValidationError("Invalid credentials");
    }

    const token = JwtUtil.sign({ userId: user.id });
    const { password: _, ...safeUser } = user;

    return {
      status: "success",
      data: { user: safeUser, token },
      message: "Login successful",
    };
  }

  // ---------------------------
  // GET CURRENT USER
  // ---------------------------
  async me(request: Request) {
    const authHeader = request.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new ValidationError("Authorization header missing");
    }

    const token = authHeader.split(" ")[1];
    let payload: any;

    try {
      payload = jwt.verify(token, JWT_SECRET);
    } catch (error) {
      throw new ValidationError("Invalid token");
    }

    // Use userId from JWT payload instead of email
    const user = await this.userRepo.findById(payload.userId);
    if (!user) {
      throw new ValidationError("User not found");
    }

    const { password, ...safeUser } = user;

    return {
      status: "success",
      data: { user: safeUser },
      message: "User retrieved successfully",
    };
  }

  // ---------------------------
  // LOGOUT
  // ---------------------------
 async logout(origin?: string): Promise<NextResponse> {
    return NextResponse.json(
      {
        status: "success",
        message: "Logged out successfully",
      },
      {
        status: 200,
        headers: {
          ...Cors.headers(origin),
          "Set-Cookie":
            "token=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0",
        },
      }
    );
  }
}
