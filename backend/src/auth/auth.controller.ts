import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from '../users/users.service.js';
import { LoginDto } from './dto/login.dto.js';

@Controller('auth')
export class AuthController {
    constructor(private readonly userService: UsersService) {}

    @Post('/login')
    login(@Body() loginDto: LoginDto) {

    };
};
