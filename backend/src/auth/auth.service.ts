import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service.js';
import { LoginDto } from './dto/login.dto.js';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService) {}

    login({ email, password }: LoginDto) {

    };
};
