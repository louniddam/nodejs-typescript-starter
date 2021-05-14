import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm'
import { Progression } from './progression';
import { Category } from './category';

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

    @OneToMany(type => Progression, progression => progression.skill)
    progression: Progression[]

    @ManyToOne(type => Category, category => category.skills)
    category: Category[]

}