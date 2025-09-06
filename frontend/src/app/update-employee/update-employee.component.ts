import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service'; // Assuming EmployeeService exists
import { Employee } from '../employee.model'; // Employee interface
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from '../layout/layout.component';
import { LoginService } from '../login.service';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-employee',
  standalone:true,
  imports:[FormsModule,HttpClientModule],
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  emp_id :number=0;
  odc : string='';


 
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
      this.odc=employee.odc;
    });
  }

  // empIdInt = parseInt(this.emp_id,10);
  

  onSubmit(): void {
    // Show a confirmation dialog using SweetAlert2
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to update the ODC?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, update it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        // Proceed with the update if the user confirms
        this.employeeService.updateEmployeeODC(this.emp_id, this.odc).subscribe(
          () => {
            Swal.fire('Success', 'ODC updated successfully', 'success');
            // if( this.adminId=="Admin"){
              this.router.navigate(['/layout']);
            // }else{
            //   this.router.navigate(['/user']);
            // }
         
          },
          (error) => {
            console.error('Error updating ODC:', error);
            Swal.fire('Error', 'There was an issue updating the ODC', 'error');
          }
        );
      } else {
        console.log('ODC update canceled');
      }
    });
  

  }
  
}