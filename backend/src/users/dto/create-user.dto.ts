import { IsString, IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    // Simple passwords allowed
    @IsString()
    @MinLength(6, { message: 'Password must be at least 6 characters long' })
    password: string;
};
