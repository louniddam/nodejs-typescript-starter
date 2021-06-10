import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { GetByIdLevel } from './getByIdLEvel'
import { GetByIdLevelController } from './getByIdLEvelController'
import { LevelRepo } from '../../levelRepo'

const levelRepo = new LevelRepo(entitiesObject)
const getByIdLevel = new GetByIdLevel(levelRepo)
const getByIdLevelController = new GetByIdLevelController(getByIdLevel)

export { getByIdLevel, getByIdLevelController }