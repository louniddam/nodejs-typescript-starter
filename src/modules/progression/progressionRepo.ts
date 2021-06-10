import { progressProps } from './progressionTypes'

export class ProgressRepo {
    private entities: any

    constructor(entities: any) {
        this.entities = entities
    }

    public async createProgress(progressProps: progressProps) {
        const ProgressEntity = this.entities.Progression

        return await ProgressEntity.create({ skill: progressProps.skill, student: progressProps.student, level: progressProps.level }).save()
    }
}