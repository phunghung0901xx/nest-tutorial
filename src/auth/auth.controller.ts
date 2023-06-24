import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
class AppController {
  
    constructor(private authSerivce: AuthService) {

    }

    @Post("register")
    register () {
        return this.authSerivce.register
    }

    @Post("login")
    login() {
        return this.authSerivce.login
    }
}
export class AuthController {}