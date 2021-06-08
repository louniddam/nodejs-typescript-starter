import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity, OneToOne, JoinColumn } from "typeorm";
import { Progression } from "./progression";
import { User } from './user'

@Entity()
export class Student extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @OneToMany(() => Progression, progression => progression.student)
    progression: Progression[]

    @OneToOne(() => User)
    @JoinColumn()
    user: User;

}