import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Level } from './level'
import { Skill } from './skill'
import { User } from './user'

@Entity()
export class Progression {

    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'date'})
    date: string

    @ManyToOne(type => Level, level => level.progression)
    level: Level

    @ManyToOne(type => User, user => user.progression)
    user: User

    @ManyToOne(type => Skill, skill => skill.progression)
    skill: Skill
}
