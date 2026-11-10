import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity.js';
import { Product } from '../products/entities/product.entity.js';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'node:path';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        TypeOrmModule.forRoot({
            type: "better-sqlite3",
            database: "database.sqlite",
            entities: [User, Product],
            autoLoadEntities: true,
            synchronize: false,
        }),
        ServeStaticModule.forRoot({
            rootPath: join(process.cwd(), "uploads"),
            serveRoot: "/uploads",
        }),
    ],
})
export class AppModule {}
