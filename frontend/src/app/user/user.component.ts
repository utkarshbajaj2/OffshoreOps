import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
employee : any;
loggedInuser:any;
employees: Employee[]=[];
emp_id:string='';
messageToSend :string='';



  constructor(
    private loginService:LoginService,
    private employeeService : EmployeeService ,
    private router:Router,
    private route:ActivatedRoute,
            ){
      this.emp_id=localStorage.getItem('loggedInUser') ||'';
     }

   
    ngOnInit(): void {
   this.loggedInuser =this.loginService.getLoggedInUser();
    
    console.log(this.loggedInuser);
    if(this.loggedInuser ){
        const empIdInt = parseInt(this.loggedInuser,10);
        this.employeeService.getDetails(empIdInt).subscribe((data : any)=>{
          this.employees=data;
          if(this.employees.length == 0){
            this.router.navigate(['/register']);
          }
        });
        
        

    
  }

 

}
onLogOut():void{
  this.router.navigate(['/login']);
  localStorage.setItem('loggedInUser','');
}
onRequest(employee: Employee):void{
  this.router.navigate(['/request',employee.emp_id]);
}

onRegister():void{
  this.router.navigate(['/register']);
}


}
