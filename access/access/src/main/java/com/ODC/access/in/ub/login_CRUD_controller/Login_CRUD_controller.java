package com.ODC.access.in.ub.login_CRUD_controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.ODC.access.in.ub.beans.ODC;
import com.ODC.access.in.ub.login.login;
import com.ODC.access.in.ub.login_service.Login_service;
import com.ODC.access.in.ub.service.ODC_Service;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController 
@RequestMapping("/api/user")
public class Login_CRUD_controller {

		
		@Autowired
		private Login_service login_service;   //OBJECT OF SERVICE CLASS

		
	//---------------------------GETTER & SETTER--------------------------------------------------	
		
		public Login_service getLogin_service() {
			return login_service;
		}


		public void setLogin_service(Login_service login_service) {
			this.login_service = login_service;
		}
		
		
		
		//----------------------------READING--------------------------------------------------	

		@RequestMapping(value="/get", method=RequestMethod.GET)
		public List<login> getAlllogin()
		{
			System.out.println("working");
			return login_service.getAlllogin();
		}
		
		
	//----------------------------CREATING---------------------------------------------------

			@RequestMapping(value="/add" , method=RequestMethod.POST)
			public void addBook(@RequestBody login log) {
//				System.out.println(odc.getEmp_id());
//				System.out.println(odc.getName());
//				System.out.println(odc.getOdc());
//				System.out.println(odc.getRole());
//				System.out.println("add working");
				login_service.addBook(log);

		}
			
			
			
	//----------------------------UPDATE--------------------------------------------------		
			
			@RequestMapping(value="/update" , method=RequestMethod.PUT)
			public void update_data(@RequestBody login log) {
				login_service.update_data(log);
			}
			
			
	//----------------------------DELETE--------------------------------------------------		
			
			@RequestMapping(value="/delete" , method=RequestMethod.DELETE)
			public void remove_data(@RequestBody login log) {
				login_service.remove_data(log);
			}
	}



