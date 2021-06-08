import { BaseEntity, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Level } from './level'
import { Skill } from './skill'
import { Student } from './student'

@Entity()
export class Progression extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    // @Column({type: 'date'})
    // date: string

    @ManyToOne(() => Level, level => level.progression)
    level: Level

    @ManyToOne(() => Student, student => student.progression)
    student: Student

    @ManyToOne(() => Skill, skill => skill.progression)
    skill: Skill
}
