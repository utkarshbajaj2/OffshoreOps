package com.ODC.access.in.ub.login_service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ODC.access.in.ub.DAO.ODC_DAO;
import com.ODC.access.in.ub.beans.ODC;
import com.ODC.access.in.ub.login.login;
import com.ODC.access.in.ub.login_DAO.Login_DAO;


@Service
public class Login_service {


	
		
	@Autowired
		private Login_DAO login_dao; //OBJECT OF ODC DAO CLASS
		
		
		//---------------------------GETTER & SETTER--------------------------------------------------	

		public Login_DAO getLogin_dao() {
		return login_dao;
	}

	public void setLogin_dao(Login_DAO login_dao) {
		this.login_dao = login_dao;
	}

		//----------------------------READING--------------------------------------------------
		
		public List<login> getAlllogin()
		{
			System.out.println("ODC_service working");
			return login_dao.findAll();
		}
		
		
		//----------------------------CREATE-------------------------------------------------
		
		public void addBook(login log)
		{
			
			System.out.println(log.getEmp_id());
			System.out.println(log.getPassword());
			System.out.println(log.getId_card());
			login_dao.save(log);
		}
		
		
		//----------------------------DELETE--------------------------------------------------
		
		public void remove_data(login log)
		{
			login_dao.remove(log);
		}
		

		//----------------------------UPDATE--------------------------------------------------
		
		public void update_data(login log)
		{
			login_dao.update(log);
		}
		
		//---------------------------LOGIN-------------------------------------------
		

			public login ValidateUser(String emp_id , String password) {
				login lg=login_dao.ValidateUser(emp_id, password);
			return lg;
		}
		
		}
		

	



