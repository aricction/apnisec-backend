
import { UserRepository } from "../repositories/UserRepository";
import { PasswordUtil } from "../utils/PasswordUtil";
import { JwtUtil } from "../utils/JwtUtil";
import { ValidationError } from "../errors/ValidationError";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";


const JWT_SECRET = process.env.JWT_SECRET ;


export class AuthService {
    private userRepo = new UserRepository();

    async register(name: string, email: string, password: string) {
        const existingUser = await this.userRepo.findByEmail(email);

        if(existingUser) {
            throw new Error("User already exists");
        }

        const hashedPassword = await PasswordUtil.hash(password);
        const newUser = await this.userRepo.create({
            name,
            email,
            password: hashedPassword
        });

        const token = JwtUtil.sign({ userId: newUser.id});
        return {user: newUser, token}
    }

    async login(email: string, password: string) {
        const user = await this.userRepo.findByEmail(email);

        if(!user){
            throw new Error("invalid credentials");
        }

        const valid = await PasswordUtil.compare(password, user.password);
        if(!valid){
            throw new Error("Invalid credentials");
        }
        const token = JwtUtil.sign({ userId: user.id});
        return { user, token}
    }

    async me(request: Request){ 
     const authHeader = request.headers.get("Authorization");

     if(!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new ValidationError("Authorization header missing");
     }

     const token = authHeader.split(" ")[1];
     let payload : any;

     try {
        payload = jwt.verify(token, JWT_SECRET!);
     } catch (error) {
        throw new ValidationError("Invalid token");
     }

     const user = await this.userRepo.findByEmail(payload.email);
    if (!user) {
      throw new ValidationError("User not found");
    }

     const { password, ...safeUser } = user;
    return NextResponse.json({ user: safeUser }, { status: 200 });

    }
     

    async logout() {
        return NextResponse.json({ message: "Logged out successfully" }, { status: 200 });
    }
    
}