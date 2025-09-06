package com.ODC.access.in.ub.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ODC.access.in.ub.DAO.ODC_DAO;
import com.ODC.access.in.ub.beans.ODC;

@Service
public class ODC_Service {
	
@Autowired
	private ODC_DAO odc_dao; //OBJECT OF ODC DAO CLASS
	
	
	//---------------------------GETTER & SETTER--------------------------------------------------	

	public ODC_DAO getOdc_dao() {
		return odc_dao;
	}

	public void setOdc_dao(ODC_DAO odc_dao) {
		this.odc_dao = odc_dao;
	}
	
	
	//----------------------------READING--------------------------------------------------
	
	public List<ODC> getAllODC()
	{
		System.out.println("ODC_service working");
		return odc_dao.findAll();
	}
	
	//----------------------------READING--------------------------------------------------
	
		public List<ODC> getAllODC1()
		{
			System.out.println("ODC_service working");
			return odc_dao.findAll1();
		}
		
		//----------------------------READING--------------------------------------------------
		
			public List<ODC> getAllODC2(int emp_id)
			{
				System.out.println("ODC_service working");
				return odc_dao.findAll2(emp_id);
			}
	
	
	//----------------------------CREATE-------------------------------------------------
	
	public void addBook(ODC odc)
	{
		
		System.out.println(odc.getEmp_id());
		System.out.println(odc.getName());
		//System.out.println(odc.getOdc());
		System.out.println(odc.getRole());
		System.out.println(odc.getId_card());
		odc_dao.save(odc);
	}
	
	
	//----------------------------DELETE--------------------------------------------------
	
	public void remove_data(ODC odc)
	{
		odc_dao.remove(odc);
	}
	

	//----------------------------UPDATE--------------------------------------------------
	
	public void update_data(ODC odc)
	{
		odc_dao.update(odc);
	}
	//----------------------------UPDATE - ID --------------------------------------------------
	public void update_data_id(ODC odc)
	{
		odc_dao.update_id(odc);
	}
	//----------------------------UPDATE REQUEST--------------------------------------------------

	public void update_request(ODC odc) {
		odc_dao.update_request(odc);
	}
	

}
