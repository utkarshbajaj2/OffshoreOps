import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({
    providedIn:'root',
})

export class DataSharingService{

    private emp_idSource = new BehaviorSubject<String>('');

    currentemp_id=this.emp_idSource.asObservable();

    changeemp_id(id:string){
        this.emp_idSource.next(id);
    }
}