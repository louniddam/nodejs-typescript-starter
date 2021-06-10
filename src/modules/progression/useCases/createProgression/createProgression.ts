import { progressProps } from '../../progressionTypes'
import { ProgressRepo } from '../../progressionRepo'
import { LevelRepo } from '../../../level/levelRepo'
import { StudentRepo } from '../../../student/studentRepo'
import { SkillRepo } from '../../../skill/skillRepo'

export class CreateProgress {
    private progressRepo: ProgressRepo
    private levelRepo: LevelRepo
    private studentRepo: StudentRepo
    private skillRepo: SkillRepo

    constructor(progressRepo: ProgressRepo, levelRepo: LevelRepo, studentRepo: StudentRepo, skillRepo: SkillRepo){
        this.progressRepo = progressRepo
        this.levelRepo = levelRepo
        this.skillRepo = skillRepo
        this.studentRepo = studentRepo
    }

    public async createProgress(props: progressProps) {

        const { level } = props
        const { skill } = props
        const { student } = props
        let levelEntity = null
        let skillEntity  = null
        let studentEntity  = null
        
        if(level && skill && student) {
            const foundLevel = await this.levelRepo.findLevelById(level)
            const foundSkill = await this.skillRepo.getSkillById(skill)
            const foundStudent = await this.studentRepo.getStudentById(student)

            if(foundLevel && foundSkill && foundStudent){
                levelEntity = foundLevel
                skillEntity = foundSkill
                studentEntity = foundStudent
            }
        }

        props.level = levelEntity
        props.skill = skillEntity
        props.student = studentEntity

        return await this.progressRepo.createProgress(props)
    }
}