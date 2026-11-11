import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity.js';
import argon2 from 'argon2';
import { Session } from 'express-session';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}

    async login({ email, password }: LoginDto) {
        const user = await this.userRepository.findOneBy({ email });
        if (!user) {
            throw new NotFoundException('User not found');
        };

        const isValid = await argon2.verify(user.pwd_hash, password);
        if (!isValid) {
            throw new UnauthorizedException('Incorrect password');
        };

        return {
            id: user.id,
            name: user.name,
            email: user.email,
        };
    };

    async logout(session: Session) {
        await new Promise<void>((resolve, reject) => {
            session.destroy((err) => {
                if (err) reject(err);
                else resolve();
            });
        });
    };
};
