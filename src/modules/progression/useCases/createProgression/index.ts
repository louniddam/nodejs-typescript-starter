import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { ProgressRepo } from '../../progressionRepo'
import { CreateProgress } from './createProgression'
import { CreateProgressController } from './createProgressionController'
import { LevelRepo } from '../../../level/levelRepo'
import { StudentRepo } from '../../../student/studentRepo'
import { SkillRepo } from '../../../skill/skillRepo'

const progressRepo = new ProgressRepo(entitiesObject)
const levelRepo = new LevelRepo(entitiesObject)
const studentRepo = new StudentRepo(entitiesObject)
const skillRepo = new SkillRepo(entitiesObject)
const createProgress = new CreateProgress(progressRepo, levelRepo, studentRepo, skillRepo)
const createProgressController = new CreateProgressController(createProgress)

export { createProgress, createProgressController }