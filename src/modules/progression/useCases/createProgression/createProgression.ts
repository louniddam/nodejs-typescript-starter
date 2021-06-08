import { progressProps } from '../../progressionTypes'
import { ProgressRepo } from '../../progressionRepo'

export class CreateProgress {
    private progressRepo: ProgressRepo

    constructor(progressRepo: ProgressRepo){
        this.progressRepo = progressRepo
    }

    public async createProgress(props: progressProps) {
        return await this.progressRepo.createProgress(props)
    }
}