package com.ODC.access.in.ub.login_DAO;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.apache.commons.logging.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.ODC.access.in.ub.beans.ODC;
import com.ODC.access.in.ub.login.login;

@Repository 
public class Login_DAO {
	


	
		
		@Autowired
		private JdbcTemplate jdbcTemplate; //OBJECT OF JDBC-TEMPLATE CLASS
		
		//---------------------------GETTER & SETTER--------------------------------------------------	


		public JdbcTemplate getJdbcTemplate() {
			return jdbcTemplate;
		}

		public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
			this.jdbcTemplate = jdbcTemplate;
		}
		
		
		
		
		public login ValidateUser( String id_card,String password) {
			String sql = " SELECT * FROM login_details WHERE emp_id=? AND password=?;";
			
			try
			{
				return jdbcTemplate.queryForObject(sql, new Object[] {id_card,password}, new RowMapper<login>() {
					@Override
					public login mapRow(ResultSet rs , int rowNum) throws SQLException{
						login l = new login();
						l.setEmp_id(rs.getString("emp_id"));
						l.setPassword(rs.getString("password"));
						l.setId_card(rs.getInt("id_card"));
						return l;
					}
				});
			}
			catch(EmptyResultDataAccessException e)
			{
				return null;
			}
		}
		
		
		
		//-------------------------------READING------------------------------------------
		
		public List<login> findAll()
		{
			System.out.println("login DAO working");
			String sql="select * from login_details";
			return jdbcTemplate.query(sql, new RowMapper<login>() {

				@Override
				public login mapRow(ResultSet rs, int rowNum) throws SQLException {
					login log = new login();
					log.setEmp_id(rs.getString("emp_id"));
					log.setPassword(rs.getString("password"));
					log.setId_card(rs.getInt("id_card"));
					return log;
				}

		
		});
		}
		

	//---------------------------------CREATING-------------------------------------------	
		
		public void save(login log)
		{
			System.out.println("1st working");
	String insert_query = "INSERT INTO login_details(emp_id,password,id_card) VALUES (?,?,?)";
			int count = jdbcTemplate.update(insert_query,log.getEmp_id(),log.getPassword(),log.getId_card());
			System.out.println("inserted values are "+log.getId_card()+ " " +log.getPassword()+" "+log.getId_card());

			}
		

	//--------------------------------UPDATING---------------------------------------------	
	
		public void update(login log)
		{
			System.out.println("2nd working");
	String update_query = "UPDATE login_details SET password =? WHERE emp_id=?";
			int count = jdbcTemplate.update(update_query,log.getPassword(),log.getEmp_id());
			System.out.println("updated values are "+log.getId_card()+ " " +log.getPassword());

			}
		
		
	//------------------------------DELETE-------------------------------------------------	
		
		public void remove(login log)
		{
			String delete_query="delete from login_details where id_card =?";
			jdbcTemplate.update(delete_query,log.getId_card());
			System.out.println("deleted values are "+log.getEmp_id()+ " " +log.getPassword());

		}
		
		
		//----------------------------------------------------------------------------
	
		
	}

		
		
		
		

		



