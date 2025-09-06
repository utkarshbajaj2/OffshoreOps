
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
  selector: 'app-error',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule],
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})



export class ErrorComponent {

  constructor(private router:Router){}

  
  onLogOut():void{
    this.router.navigate(['/login']);}
  }

