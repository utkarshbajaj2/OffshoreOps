import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Password } from '../password.model';
// import { Register } from '../reg_employee.model';
import { Register } from '../reg_employee,model';

@Component({
  selector: 'app-password-register',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule],
  templateUrl: './password-register.component.html',
  styleUrls: ['./password-register.component.css']
})
export class PasswordRegisterComponent {

  password:Password={
    emp_id :'',
    password :'',
    id_card: 0,
  };

  comfirmPassword:string='';
  message:string='';
  messageClass:string='';
  errorMessage:string='';
  registrationMessage:string='';
  
  constructor(private employeeService : EmployeeService, private http:HttpClient , private router:Router){}

  onSubmit():void{
    this.employeeService.addPassword(this.password).subscribe(
      (response)=>{
        this.message='Employee registered successfully';
        this.messageClass ='success';
        this.password={emp_id:'',password:'',id_card:0,};
        this.router.navigate(['/login']);
          console.log(this.password.emp_id);
      },
      (error)=>{
        this.message='error occured';
      }
      );

  }

  


  passwordError:string='';
  validatePassword(): void{
    const password  = this.password.password;
    const hasNumber = /\d/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialChar = /[@$!%*?&#]/.test(password);
   
    //Password validation rules
    if(password.length < 8){
         this.passwordError = 'Password must be at least 8 characters long.';
    }
    else if(!hasNumber){
      this.passwordError = 'Password must contain at least one number.';
    }
    else if(!hasUpperCase){
      this.passwordError = 'Password must contain at least one uppercase.';
    }
    else if(!hasSpecialChar){
      this.passwordError = 'Password must contain at least one special character'
    }
    else{
      this.passwordError = '';
    }
  }

  registerUser(){
 if(this.password.password !== this.comfirmPassword){
      this.registrationMessage = 'Password do not match. Please try again.';
      return;
    }
    else{
      this.registrationMessage ='';
    }
  }


}