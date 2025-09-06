import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class LoginService{
    private loggedInUser : any;

    setLoggedInUser(user:any){
        this.loggedInUser = user;
        localStorage.setItem('loggedInUser',user);
    }

    getLoggedInUser(){
        return this.loggedInUser;
    }

    clearLoggedInUser(){
        this.loggedInUser=null;
        localStorage.removeItem('loggedInUser');
    }
}