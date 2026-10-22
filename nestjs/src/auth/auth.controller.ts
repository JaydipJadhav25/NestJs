import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { RegisterDTO } from '../Dto/register-dto.js';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService : AuthService){}
    @Post("register")
      register(@Body() registerDto : RegisterDTO){
        return this.authService.registerUser(registerDto);
    }
}
