import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("text")
    name: string;

    @Column("text", { unique: true })
    email: string;

    @Column("text")
    pwd_hash: string;
};
