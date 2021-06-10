import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { GetByIdUser } from './getByIdUSer'
import { GetByIdUserController } from './getByIdUSerController'
import { UserRepo } from '../../userRepo'

const userRepo = new UserRepo(entitiesObject)
const getByIdUser = new GetByIdUser(userRepo)
const getByIdUserController = new GetByIdUserController(getByIdUser)

export { getByIdUser, getByIdUserController }