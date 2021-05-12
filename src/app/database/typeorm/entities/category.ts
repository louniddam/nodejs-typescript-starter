import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

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
}