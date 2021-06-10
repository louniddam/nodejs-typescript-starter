interface IUser {
    email: String
    password: String
    isAdmin: Boolean
}

export type userProps = {
    email: String
    password: String
    isAdmin: Boolean
}

export class User implements IUser{
   public email: String
   public password: String
   public isAdmin: Boolean

   constructor(props: userProps){
        this.email = props.email
        this.password = props.password
        this.isAdmin = props.isAdmin
   }
}