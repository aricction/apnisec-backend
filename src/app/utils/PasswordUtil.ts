import { hash, compare } from "bcrypt";

export class PasswordUtil {
  static async hash(password: string): Promise<string> {
    return hash(password, 10);
  }

  static async compare(password: string, hash: string): Promise<boolean> {
    return compare(password, hash);
  }
}
