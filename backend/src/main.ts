import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module.js';
import { ValidationPipe } from '@nestjs/common';
import session from 'express-session';
import { SQLiteStore } from 'express-sqlite';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.use(session({
        store: new SQLiteStore('../database.sqlite'),
        secret: process.env.SESSION_SECRET!,
        resave: false,
        saveUninitialized: false,
    }));

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            transform: true,
            forbidNonWhitelisted: true,
        })
    );

    await app.listen(process.env.PORT ?? 3000);
};

await bootstrap();
