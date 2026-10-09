import { Injectable, OnModuleDestroy } from '@nestjs/common';
import Database from 'better-sqlite3';

@Injectable()
export class DatabaseService implements OnModuleDestroy {
    private readonly db: Database.Database

    constructor() {
        this.db = new Database("database.sqlite");
    };

    onModuleDestroy() {

    }
}
