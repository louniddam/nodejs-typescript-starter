import { __prod__, DB_HOST, DB_DIALECT, DB_DATABASE, DB_USERNAME } from '../../../constant'

const databaseCredentials = {
    development: {
        type: DB_DIALECT,
        database: DB_DATABASE,
        host: DB_HOST,
        username: DB_USERNAME,
        password: 'rootroot',
        logging: false, 
        synchronize: true,
        entities: [] as any[]
    },
    production: {
        type: DB_DIALECT,
        database: DB_DATABASE,
        host: DB_HOST,
        username: DB_USERNAME,
        password: 'rootroot',
        logging: !__prod__,
        synchronize: true,
        entities: [] as any[]
    },
};


export { databaseCredentials }
