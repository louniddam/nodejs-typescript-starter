import { createServer } from './app/http/app'
import { createConnection } from 'typeorm'

import { User } from './app/database/typeorm/entities/user'
import { Level } from './app/database/typeorm/entities/level'
import { Progression } from './app/database/typeorm/entities/progression'
import { Skill } from './app/database/typeorm/entities/skill'
import { Category } from './app/database/typeorm/entities/category'
import { HOST, PORT } from './constant'


createConnection({
    type: "mysql",
    host: HOST,
    port: PORT,
    username: "root",
    password: "rootroot",
    database: "skilltree_dev",
    synchronize: true,
    logging: true,
    entities: [User, Level, Category, Progression, Skill]
}).then(conn => {
    console.log('connection established');
})


createServer();