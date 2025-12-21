import { ValidationError } from "../errors/ValidationError";

export class AuthValidator {
    static register(data:any) {
        const {name, email, password} = data;

        if(!name || !email || !password) {
            throw new ValidationError("All fields are required");
        }

        if(password.length < 6){
            throw new ValidationError("Password must be at least 6 char long");
        }
    }

    static login(data: any) {
        const {email, password} = data;

    if(!email || !password) {
        throw new ValidationError("Email and Password are required");
    }
    }
}