import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { CreateLevelController } from './createLevelController'
import { CreateLevel } from './createLevel'
import { LevelRepo } from '../../levelRepo'

const levelRepo = new LevelRepo(entitiesObject)
const createLevel = new CreateLevel(levelRepo)
const createLevelController = new CreateLevelController(createLevel)

export { createLevel, createLevelController }



