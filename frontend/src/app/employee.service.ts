import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee} from './employee.model';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Password } from "./password.model";
// import { Register } from "./reg_employee.model";
import { Register } from "./reg_employee,model";
@Injectable({
    providedIn:'root'
})

export class EmployeeService{

    private apiUrl ="http://localhost:8080/api/odc";
    private apiUrlAdd ="http://localhost:8080/api/odc/add";
    private apiUrlGet ="http://localhost:8080/api/odc/get";
    private apiUrlUpdate ="http://localhost:8080/api/odc/update";
    private apiUrlUpdate_req ="http://localhost:8080/api/odc/req";
    private apiUrlDelete ="http://localhost:8080/api/odc/delete";
    private apiUrlemp ="http://localhost:8080/api/odc/get_emp";
    private apiUrldata ="http://localhost:8080/api/odc/get_data";
    private apiUrlpassAdd="http://localhost:8080/api/user/add";


    constructor(private http:HttpClient){}

    addPassword(password:Password):
    Observable<any>{
        const headers= new HttpHeaders({
            'Content-Type':'application/json'
        });
        return this.http.post(this.apiUrlpassAdd,password,{headers , responseType:'text'},);
        
    }


    addEmployee(register:Register):
    Observable<any>{
        const headers= new HttpHeaders({
            'Content-Type':'application/json'
        });
        return this.http.post(this.apiUrlAdd,register,{headers , responseType:'text'},);
        
    }

    getEmpolyees():Observable<Employee[]>{
        return this.http.get<Employee[]>(this.apiUrlGet);
    }

    // updateEmployeeODC(emp_id:number,newODC:string):
    // Observable<Employee>{

    //     const params=new HttpParams().set('emp_id',emp_id.toString()).set('odc',newODC)
    //      return this.http.put<Employee>(this.apiUrlUpdate,{},{params});
    // }
    

    updateEmployeeODC(emp_id:number,newODC:string):
    Observable<Employee>{
        const headers= new HttpHeaders({
            'Content-Type':'application/json'
        });

            const payload={
                emp_id:emp_id,
                odc:newODC
            };
         return this.http.put<Employee>(this.apiUrlUpdate,payload,{headers , responseType:'json'});
    }

    updateRequest(newREQ:string,emp_id:number):
    Observable<Employee>{
        const headers= new HttpHeaders({
            'Content-Type':'application/json'
        });

            const payload={
                request:newREQ,
                emp_id:emp_id
                
            };
         return this.http.put<Employee>(this.apiUrlUpdate_req,payload,{headers , responseType:'json'});
    }


    deleteEmployee(employee:Employee):Observable<void>{
        return this.http.post<void>(this.apiUrlDelete,employee);
    }

   

    getEmployeeById(emp_id:number):
    Observable<Employee>{
        return this.http.get<Employee>(this.apiUrlemp);
    }
    
    getDetails(emp_id:number):
    Observable<any>{
        return this.http.get<any>(`${this.apiUrldata}/${emp_id}`,{responseType:'json'});
    }


    
}
