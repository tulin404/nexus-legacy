import { Injectable, OnModuleDestroy } from '@nestjs/common';
import Database from 'better-sqlite3';

// SINGLETON
@Injectable()
export class DatabaseService implements OnModuleDestroy {
    private readonly db: Database.Database

    constructor() {
        this.db = new Database("database.sqlite");
    };

    // DB CONN GETTER
    getConnection(): Database.Database {
        return this.db
    };

    onModuleDestroy() {
        this.db.close();
    };
};
