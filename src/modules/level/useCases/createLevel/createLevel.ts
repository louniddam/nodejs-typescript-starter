import { LevelRepo } from '../../levelRepo'
import { LevelProps } from '../../levelTypes'

export class CreateLevel {
    private levelRepo: LevelRepo

    constructor(levelRepo: LevelRepo) {
        this.levelRepo = levelRepo
    }

    public async createLevel(props: LevelProps){
        return await this.levelRepo.createLevel(props)
    }
}