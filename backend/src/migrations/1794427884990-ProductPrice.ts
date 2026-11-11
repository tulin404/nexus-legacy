import { MigrationInterface, QueryRunner } from "typeorm";

export class ProductPrice1794427884990 implements MigrationInterface {
    name = 'ProductPrice1794427884990'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_products" ("id" varchar PRIMARY KEY NOT NULL, "size" text NOT NULL, "name" text NOT NULL, "desc" text NOT NULL, CONSTRAINT "UQ_4c9fb58de893725258746385e16" UNIQUE ("name"))`);
        await queryRunner.query(`INSERT INTO "temporary_products"("id", "size", "name", "desc") SELECT "id", "size", "name", "desc" FROM "products"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`ALTER TABLE "temporary_products" RENAME TO "products"`);
        await queryRunner.query(`CREATE TABLE "temporary_products" ("id" varchar PRIMARY KEY NOT NULL, "size" text NOT NULL, "name" text NOT NULL, "desc" text NOT NULL, "price" float NOT NULL, "img_path" text NOT NULL, CONSTRAINT "UQ_4c9fb58de893725258746385e16" UNIQUE ("name"))`);
        await queryRunner.query(`INSERT INTO "temporary_products"("id", "size", "name", "desc") SELECT "id", "size", "name", "desc" FROM "products"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`ALTER TABLE "temporary_products" RENAME TO "products"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" RENAME TO "temporary_products"`);
        await queryRunner.query(`CREATE TABLE "products" ("id" varchar PRIMARY KEY NOT NULL, "size" text NOT NULL, "name" text NOT NULL, "desc" text NOT NULL, CONSTRAINT "UQ_4c9fb58de893725258746385e16" UNIQUE ("name"))`);
        await queryRunner.query(`INSERT INTO "products"("id", "size", "name", "desc") SELECT "id", "size", "name", "desc" FROM "temporary_products"`);
        await queryRunner.query(`DROP TABLE "temporary_products"`);
        await queryRunner.query(`ALTER TABLE "products" RENAME TO "temporary_products"`);
        await queryRunner.query(`CREATE TABLE "products" ("id" varchar PRIMARY KEY NOT NULL, "size" text NOT NULL, "name" text NOT NULL, "desc" text NOT NULL, "img_url" text NOT NULL, CONSTRAINT "UQ_4c9fb58de893725258746385e16" UNIQUE ("name"))`);
        await queryRunner.query(`INSERT INTO "products"("id", "size", "name", "desc") SELECT "id", "size", "name", "desc" FROM "temporary_products"`);
        await queryRunner.query(`DROP TABLE "temporary_products"`);
    }

}
