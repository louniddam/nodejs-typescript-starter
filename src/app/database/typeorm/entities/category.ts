import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity } from 'typeorm'
import {Skill }from './skill'

@Entity()
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100
    })
    name: string;

    @Column("text")
    description: string;

    @OneToMany(() => Skill, skill => skill.category)
    skills: Skill[]
}