import{User} from './user.model';
import{AuthData} from './auth-data.model'

export class AuthService{
    private user: User;

    registerUser(authData: AuthData){
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 1000).toString()
        }
    }
}