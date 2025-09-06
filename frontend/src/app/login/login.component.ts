import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
loginObj :Login;
passwordError:string='';

constructor(private http:HttpClient , private router:Router , private loginService:LoginService){
  this.loginObj=new Login();
}



onNew():void{
  this.router.navigate(['/password-register']);
}

validatePassword(): void{
  const password  = this.loginObj.password;
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






onLogin(){
  debugger;
  console.log(this.loginObj.emp_id, this.loginObj.password);
this.http.post('http://localhost:8080/loginpage/login',this.loginObj).subscribe((res:any)=>{
  let jsonresp = res;
  console.log(res);
  if(res.message==="login successful"){
      this.loginService.setLoggedInUser(this.loginObj.emp_id)
    
    if(this.loginObj.emp_id==="Admin"){
      this.router.navigate(['/layout']);
    alert("login success as ADMIN");
    }
    else{
      this.router.navigate(['/user']);
      alert("login success as USER");
    }
    
    
    
  }
  else {
    console.log('invalid');
    alert("invalid credentials");
  }
}, (err: any)=>{
    console.log('error', err);
    console.log('invalid');
    alert("invalid credentials");
  
});

}

//let getLoggedInEmployeeIdString: string:this.loginObj.emp_id;
//let getLoggedInEmployeeId:number=parseInt()

}

export class Login {

  emp_id:String;
  password:string;
  constructor(){
    this.emp_id="";
    this.password="";
  }
}
