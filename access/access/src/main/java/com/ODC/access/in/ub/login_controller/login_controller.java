package com.ODC.access.in.ub.login_controller;


import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.ODC.access.in.ub.login.login;
import com.ODC.access.in.ub.login_service.Login_service;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/loginpage")
public class login_controller {
	
	@Autowired
	private Login_service login_service;


	
	@PostMapping("/login")
	public ResponseEntity<Map<String , Object>>log(@RequestBody login log) {
		Map<String , Object> response = new HashMap<>();
		
		
		
		login authenticatedUser =login_service.ValidateUser(log.getEmp_id(),log.getPassword());

		
	
		if (authenticatedUser != null){
			response.put("message","login successful"); 
			return ResponseEntity.status(HttpStatus.OK).body(response);
		}
		else {
			response.put("message","login unsuccessful"); 

			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
//			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("invalid");
		}
		
	}
	
	
	
}
