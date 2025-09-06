import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ChildrenOutletContexts, RouterOutlet, Routes, RouterModule, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UserComponent } from './user/user.component';
// import { authGuard } from './auth.guard';
import { RequestComponent } from './request/request.component';
import { PasswordRegisterComponent } from './password-register/password-register.component';
import { ErrorComponent } from './error/error.component';



export const routes: Routes = [
{path: '', redirectTo:'/login' , pathMatch:'full'},

{path:'login', component:LoginComponent},
{path:'layout', component:LayoutComponent}, 
{path:'register',component:RegisterComponent},
{path :'update-employee/:emp_id', component:UpdateEmployeeComponent},
{path :'user',component:UserComponent},
{path :'request/:emp_id',component:RequestComponent},
{path :'password-register',component:PasswordRegisterComponent},
{path :'error',component:ErrorComponent}

];


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent,RegisterComponent,
    UpdateEmployeeComponent,RequestComponent
  ],
 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'ODC_PRACTICE_PROJECT';
}

