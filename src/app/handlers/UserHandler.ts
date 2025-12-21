import { UserService } from "../services/UserService";
import { BaseHandler } from "./BaseHandler";


export class UserHandler extends BaseHandler{
    private userService = new UserService();

    profile(request: Request) {
        return this.userService.getProfile(request)
    }
} 