import { sign } from "jsonwebtoken";

export class JwtUtil {
  static sign(payload: object): string {
    return sign(payload, process.env.JWT_SECRET!, {
      expiresIn: "7d",
    });
  }
}
