import { UserRepo } from '../../userRepo'

export class GetByIdUser {
    private userRepo: UserRepo

    constructor(userRepo: UserRepo){
        this.userRepo = userRepo
    }

    public async getUserById(id: number){
        return await this.userRepo.getUserById(id)
    }
}