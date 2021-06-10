import { StudentRepo } from "../../studentRepo";
import { studentProps } from '../../studentTypes';
import { UserRepo } from '../../../user/userRepo'

export class CreateStudent {
    private studentRepo: StudentRepo;
    private userRepo: UserRepo

    constructor(studentRepo: StudentRepo, userRepo: UserRepo) {
        this.studentRepo = studentRepo
        this.userRepo = userRepo
    }

    public async createStudent(props: studentProps) {
        
        const { user } = props
        let userEntity = null
        console.log("SERVICE", props);
        

        if(user) {
            const foundUser = await this.userRepo.getUserById(user)
            if(foundUser) {
                userEntity = foundUser
            }
        }

        props.user = userEntity
        
        return await this.studentRepo.createStudent(props);
    }
}