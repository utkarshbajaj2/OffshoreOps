package com.ODC.access.in.ub.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.ODC.access.in.ub.beans.ODC;
import com.ODC.access.in.ub.service.ODC_Service;


@CrossOrigin(origins = "http://localhost:4200/")
@RestController 
@RequestMapping("/api/odc")
public class controller {
	
	@Autowired
	private ODC_Service odc_service;   //OBJECT OF SERVICE CLASS

	
//---------------------------GETTER & SETTER--------------------------------------------------	
	public ODC_Service getOdc_service() {
		return odc_service;
	}

	public void setOdc_service(ODC_Service odc_service) {
		this.odc_service = odc_service;
	}
	
	
//----------------------------READING--------------------------------------------------	
	
	@RequestMapping(value="/get", method=RequestMethod.GET)
	public List<ODC> getAllODC()
	{
		System.out.println("working");
		return odc_service.getAllODC();
	}
	
	//----------------------------FETCH--------------------------------------------------	
	
		@RequestMapping(value="/get_emp", method=RequestMethod.GET)
		public List<ODC> getAllODC1()
		{
			System.out.println("working");
			return odc_service.getAllODC1();
		}
		
		//----------------------------FETCH--------------------------------------------------	
		
			@RequestMapping(value="/get_data/{emp_id}", method=RequestMethod.GET)
			public List<ODC> getAllODC2(@PathVariable int emp_id)
			{
				System.out.println("working");
				return odc_service.getAllODC2(emp_id);
			}
	
	
//----------------------------CREATING---------------------------------------------------

		@RequestMapping(value="/add" , method=RequestMethod.POST)
		public void addBook(@RequestBody ODC odc) {
//			System.out.println(odc.getEmp_id());
//			System.out.println(odc.getName());
//			System.out.println(odc.getRole());
//			System.out.println(odc.getOdc());
			
//			System.out.println("add working");
			odc_service.addBook(odc);

	}
		
		
		
//----------------------------UPDATE--------------------------------------------------		
		@CrossOrigin(origins ="*")
		@RequestMapping(value="/update" , method=RequestMethod.PUT)
		public void update_data(@RequestBody ODC odc) {
			odc_service.update_data(odc);
		}
		
//----------------------------UPDATE ID--------------------------------------------------		
		@CrossOrigin(origins ="*")
		@RequestMapping(value="/id" , method=RequestMethod.PUT)
		public void update_data_id(@RequestBody ODC odc) {
			odc_service.update_data_id(odc);
			//odc_service.update_data_id(odc);
		}
	
		//----------------------------UPDATE REQUEST--------------------------------------------------		
				@CrossOrigin(origins ="*")
				@RequestMapping(value="/req" , method=RequestMethod.PUT)
				public void update_request(@RequestBody ODC odc) {
					odc_service.update_request(odc);
					//odc_service.update_data_id(odc);
				}		
		
//----------------------------DELETE--------------------------------------------------		
		@CrossOrigin(origins ="*")
		@RequestMapping(value="/delete" , method=RequestMethod.POST)
		public void remove_data(@RequestBody ODC odc) {
			odc_service.remove_data(odc);
		}
}
