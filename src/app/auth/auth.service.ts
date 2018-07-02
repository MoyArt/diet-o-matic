import{User} from './user.model';
import{AuthData} from './auth-data.model'

export class AuthService{
    private user: User;

    registerUser(authData: AuthData){
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 1000).toString()
        }
    };
    loginUser(authData: AuthData){
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 1000).toString()
        }
    };
    logoutUser(authData: AuthData){
        this.user = null
    };
    getUser(){
        return {...this.user};
    };
    isAuth(){
        return this.user != null;
    }
}