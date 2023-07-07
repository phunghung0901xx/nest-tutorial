import { Body, Controller, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDTO } from "./dto";


@Controller('auth')
export class AuthController {
  
    constructor(private authSerivce: AuthService) {

    }

    @Post("register")
    register (@Body() body: AuthDTO ) {
        return this.authSerivce.register()
    }

    @Post("login")
    login() {
        return this.authSerivce.login()
    }
}
