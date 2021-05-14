import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import {Skill }from './skill'

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100
    })
    name: string;

    @Column("text")
    description: string;

    @OneToMany(type => Skill, skill => skill.id)
    skills: Skill[]
}