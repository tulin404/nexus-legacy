import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("products")
export class Product {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("text")
    size: string;

    @Column("text", { unique: true })
    name: string;

    @Column("text")
    desc: string;

    // BUCKET URL
    @Column("text")
    img_url: string;
};
