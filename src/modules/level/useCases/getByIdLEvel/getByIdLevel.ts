import { LevelRepo } from '../../levelRepo'

export class GetByIdLevel {
    private levelRepo: LevelRepo

    constructor(levelRepo: LevelRepo){
        this.levelRepo = levelRepo
    }

    public async findLevelById(id: number){
        return await this.levelRepo.findLevelById(id)
    }
}