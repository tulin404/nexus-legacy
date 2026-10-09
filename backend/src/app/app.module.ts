import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        TypeOrmModule.forRoot({
            type: "better-sqlite3",
            database: "database.sqlite",
            autoLoadEntities: true,
            synchronize: false,
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
