import { progressProps } from './progressionTypes'

export class ProgressRepo {
    private entities: any

    constructor(entities: any) {
        //Category //User //Skill //Level
        this.entities = entities
    }

    public async createProgress(progressProps: any) {
        const ProgressEntity = this.entities.Progress

        return await ProgressEntity.create({ skill: progressProps.skill, student: progressProps.student, level: progressProps.level }).save()
    }
}