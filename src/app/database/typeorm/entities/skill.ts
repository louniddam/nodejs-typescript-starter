import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, BaseEntity } from 'typeorm'
import { Progression } from './progression';
import { Category } from './category';

@Entity()
export class Skill extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 150
    })
    name: string;

    @Column("text")
    description: string;

    @OneToMany(() => Progression, progression => progression.skill)
    progression: Progression[]

    @ManyToOne(() => Category, category => category.skills)
    category: Category

}