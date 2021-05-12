  import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Progression } from "./progression";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @OneToMany(type => Progression, progression => progression.id_user)
    progression: Progression[]

}