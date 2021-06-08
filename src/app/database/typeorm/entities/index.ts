import { Student } from './student'
import { Skill } from './skill'
import { Category } from './category'
import { Level } from './level'
import { Progression } from './progression'
import { User } from './user'


const entities = [Student, Skill, Category, Level, Progression, User ]
const entitiesObject = { Student, Skill, Category, User, Progression, Level }

export { entities, entitiesObject }