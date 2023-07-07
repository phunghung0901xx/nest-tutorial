import { Injectable } from "@nestjs/common"
import {User, Note} from "@prisma/client"
import { PrismaService } from "../prisma/prisma.service"
import {AuthDTO} from "./dto"
import * as argon from "argon2"
@Injectable({

})
export class AuthService {
    constructor(private prismaService: PrismaService) {
        
    }
    register() {
        return {
            message: "Register an user"
        }
    }
    login() {
        return {
            message: "this is login"
        }
    }
 }