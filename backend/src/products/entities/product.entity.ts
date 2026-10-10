import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("products")
export class Product {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    size: string;

    @Column({ unique: true })
    name: string;

    @Column()
    desc: string;

    // BUCKET URL
    @Column()
    img_url: string;
};
