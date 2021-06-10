import { User } from '../user/user'

type StudentDomainProps = {
    id: number,
    firstName: string,
    lastName: string,
    user: User
}

interface IStudent {
    id: number
    firstName: string
    lastName: string
    user: User
}

export class Student implements IStudent {
    public id: number
    public firstName: string
    public lastName: string
    public user: User

    constructor(props: StudentDomainProps) {
        this.id = props.id
        this.firstName = props.firstName
        this.lastName = props.lastName
        this.user = props.user
    }
}