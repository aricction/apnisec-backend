// src/app/services/AuthService.ts
import { UserRepository } from "../repositories/UserRepository";
import { PasswordUtil } from "../utils/PasswordUtil";
import { JwtUtil } from "../utils/JwtUtil";
import { ValidationError } from "../errors/ValidationError";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export class AuthService {
  private userRepo = new UserRepository();


  async register(name: string, email: string, password: string) {
    const existingUser = await this.userRepo.findByEmail(email);
    if (existingUser) {
      throw new ValidationError("User already exists");
    }

    const hashedPassword = await PasswordUtil.hash(password);
    const newUser = await this.userRepo.create({
      name,
      email,
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


  async login(email: string, password: string) {
    const user = await this.userRepo.findByEmail(email);
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

    const user = await this.userRepo.findByEmail(payload.email

    );
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
  async logout() {
    return {
      status: "success",
      message: "Logged out successfully",
    };
  }
}
