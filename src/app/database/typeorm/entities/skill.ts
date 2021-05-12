import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Progression } from './progression';

@Entity()
export class Skill {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 150
    })
    name: string;

    @Column("text")
    description: string;

    @OneToMany(type => Progression, progression => progression.id_skill)
    progression: Progression[]

}