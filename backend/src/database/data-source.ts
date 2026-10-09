import { DataSource } from 'typeorm';

const dataSource = new DataSource({
    type: "better-sqlite3",
    database: "database.sqlite",
    entities: ["src/**/*.entity.ts"],
    migrations: ["src/database/migrations/*.ts"],
    synchronize: false,
});

export default dataSource;
