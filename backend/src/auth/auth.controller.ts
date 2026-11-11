import { Body, Controller, Get, Post, Session } from '@nestjs/common';
import { LoginDto } from './dto/login.dto.js';
import { AuthService } from './auth.service.js';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('/login')
    async login(
        @Body() loginDto: LoginDto,
        @Session() session: Record<string, any>,
    ) {
        // Errors directly return up the chain
        const user = await this.authService.login(loginDto);

        session.userId = user.id;

        // Object returning for convention
        return { user };
    };
};
