import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Progression } from './progression'


@Entity()
export class Level {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100
    })
    name: string;

    @OneToMany(type => Progression, progression => progression.level)
    progression: Progression[]
}