import { LevelProps } from './levelTypes'

export class LevelRepo {
    private entities: any

    constructor(entities: any) {
        this.entities = entities
    }

    public async createLevel (levelProps: LevelProps) {
        const levelEntity = this.entities.Level
        return await levelEntity.create({ name: levelProps.name, level: levelProps.level }).save()
    }

    public async findLevelById(id: number){
        const levelEntity = this.entities.Level

        return await levelEntity.findOne({ where: { id } })
    }
}