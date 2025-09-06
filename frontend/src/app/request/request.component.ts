import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service'; // Assuming EmployeeService exists
import { Employee } from '../employee.model'; // Employee interface
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from '../layout/layout.component';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-request',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit{
  emp_id :number=0;
  request : string='';

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router,
    private  loginservice: LoginService,
  ) {}


  adminId = this.loginservice.getLoggedInUser();


  ngOnInit(): void {

    this.route.paramMap.subscribe(params =>{
     this.emp_id= +params.get('emp_id')!;
     this.fetchEmployee();
    }
 
     
     );
   }
   fetchEmployee():void{
    this.employeeService.getEmployeeById(this.emp_id).subscribe(employee =>{
      this.request=employee.request;
    });
  }

  onSubmit(): void {
      // Show a confirmation dialog using SweetAlert2
      Swal.fire({
        title: 'Are you sure?',
        text: 'Do you want to update the REQUEST?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, update it!',
        cancelButtonText: 'Cancel',
      }).then((result) => {
        if (result.isConfirmed) {
          // Proceed with the update if the user confirms
          this.employeeService.updateRequest( this.request,this.emp_id).subscribe(
            () => {
              Swal.fire('Success', 'REQUEST updated successfully', 'success');
                 this.router.navigate(['/user']);
              
           
            },
            (error) => {
              console.error('Error updating ODC:', error);
              Swal.fire('Error', 'There was an issue updating the REQUEST', 'error');
            }
          );
        } else {
          console.log('REQUEST update canceled');
        }
      });
    
  
    }
}