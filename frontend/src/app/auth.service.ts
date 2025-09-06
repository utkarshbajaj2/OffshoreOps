import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class AuthService{
    private loggedInEmployeeIdSubject = new BehaviorSubject <string|null> (null);
    loggedInEmployeeId$ = this.loggedInEmployeeIdSubject.asObservable();

    constructor(){}
    setLoggedInEmployeeId(emp_id:string):void{
        this.loggedInEmployeeIdSubject.next(emp_id);
    }

    getLoggedInEmployeeId(): string|null{
        return this.loggedInEmployeeIdSubject.value;
    }
}

