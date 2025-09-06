import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.routes';
import { LoginComponent } from './app/login/login.component';
import { LayoutComponent } from './app/layout/layout.component';
import { RegisterComponent } from './app/register/register.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './app/update-employee/update-employee.component';
import { UserComponent } from './app/user/user.component';
import { RequestComponent } from './app/request/request.component';
import { PasswordRegisterComponent } from './app/password-register/password-register.component';
import { ErrorComponent } from './app/error/error.component';

bootstrapApplication(AppComponent,
{
providers:[
  provideRouter(routes),
  provideHttpClient()
],
})
  .catch((err) => console.error(err));