import { createUserProps } from './userTypes'

export class UserRepo {
    private entities: any

    constructor(entities: any) {
        this.entities = entities
    }

    public async create(userProps: createUserProps) {
        console.log('repo user props', userProps);
        const UserEntity = this.entities.User

        return await UserEntity.create(userProps).save()
    }


    public async getUserById(id: number){
        const userEntity = this.entities.User

        return await userEntity.findOne({ where: { id:id } })
    }
}