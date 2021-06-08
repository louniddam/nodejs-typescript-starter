import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { ProgressRepo } from '../../progressionRepo'
import { CreateProgress } from './createProgression'
import { CreateProgressController } from './createProgressionController'

const progressRepo = new ProgressRepo(entitiesObject)
const createProgress = new CreateProgress(progressRepo)
const createProgressController = new CreateProgressController(createProgress)

export { createProgress, createProgressController }