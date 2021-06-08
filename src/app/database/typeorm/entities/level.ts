import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity } from 'typeorm'
import { Progression } from './progression'


@Entity()
export class Level extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100
    })
    name: string;

    @Column()
    level: string;

    @OneToMany(() => Progression, progression => progression.level)
    progression: Progression[]
}