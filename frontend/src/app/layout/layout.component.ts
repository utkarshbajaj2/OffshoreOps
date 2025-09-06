import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DataSharingService } from '../login/data-sharing.service';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit 
{
  odc:string='';
  emp_id:string='';
  emp_details:string | null=null;
  message:string | null=null;
  employees: Employee[]=[];
empInt:number=0;
  private popupSubscription!:Subscription;

  constructor(private employeeService :EmployeeService ,
     private router:Router, 
     private http:HttpClient , 
     private sharedDataService:DataSharingService)
     {}

onLogin(){
  this.sharedDataService.changeemp_id(this.emp_id);
 
}

  ngOnInit(): void {this.employeeService.getEmpolyees().subscribe((data)=>{
    this.employees=data;
  
  
    
  }); }
  
// hidenId:number=0;

//   hideItem(id:number):void{
//      this.hidenId=id;
//   }


  onUpdate(employee: Employee): void {
    // Parse employee ID and prepare data for update
    this.empInt = parseInt(this.emp_id, 10);
    this.odc = employee.request; // Assuming 'request' is the ODC status
  
    // Show confirmation popup before updating
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to grant ODC access for this employee?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#4CAF50', // Green button for "Yes"
      cancelButtonColor: '#d33', // Red button for "Cancel"
      confirmButtonText: 'Yes, update it!',
      cancelButtonText: 'No, cancel!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Proceed with updating ODC access if confirmed
        this.employeeService.updateEmployeeODC(employee.emp_id, this.odc).subscribe(
          () => {
            // Show success message after updating ODC
            Swal.fire(
              'Updated!',
              'ODC access has been granted.',
              'success'
            );
  
            this.ngOnInit(); // Reload the component to reflect changes
          },
          (error) => {
            // Show error message if update fails
            Swal.fire(
              'Error!',
              'There was an issue updating the ODC access.',
              'error'
            );
          }
        );
  
        // Update the employee request status to 'Granted'
        employee.request = 'Granted';
        
        // Update the request status in the system
        this.employeeService.updateRequest(employee.request, employee.emp_id).subscribe(
          () => {
            // Show success message after updating request status
            Swal.fire(
              'Request Updated!',
              'The employee request status is now "Granted".',
              'success'
            );
  
            this.ngOnInit(); // Reload to refresh the UI
          },
          (error) => {
            // Show error message if updating request fails
            Swal.fire(
              'Error!',
              'There was an issue updating the request status.',
              'error'
            );
          }
        );
      } else {
        // Show a cancellation message if the update is cancelled
        Swal.fire(
          'Cancelled',
          'No changes were made.',
          'info'
        );
      }
    });
  }
  

  

  
  deleteEmployee(employee: Employee): void {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to delete employee with ID ${employee.emp_id}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        this.employeeService.deleteEmployee(employee).subscribe(
          () => {
            this.ngOnInit(); 
          },
          (error) => {
            console.error('Error deleting employee:', error);
          }
        );
      }
    });
  }

  onNew():void{
    this.router.navigate(['/register']);
  }

  onLogOut():void{
    this.router.navigate(['/login']);
    localStorage.setItem('loggedInUser','');
  }

  onRequest(employee: Employee):void{
    this.router.navigate(['/request',employee.emp_id]);
  }

  isDisabled(employee:Employee):boolean{

  if(employee.request==='Granted'){
    
    return true;
  }else {
    return false;
  }
  }
}
