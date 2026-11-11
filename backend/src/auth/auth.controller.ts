import { Body, Controller, Get, Post, Session, UseGuards } from '@nestjs/common';
import { LoginDto } from './dto/login.dto.js';
import { AuthService } from './auth.service.js';
import { AuthGuard } from './auth.guard.js';
import type { Session as SessionType } from 'express-session';

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

    @Post('/logout')
    @UseGuards(AuthGuard)
    async logout(@Session() session: Record<string, any>) {
        // Error going up
        await this.authService.logout(session as SessionType);

        return { message: 'Logout sucessful' };
    };
};
