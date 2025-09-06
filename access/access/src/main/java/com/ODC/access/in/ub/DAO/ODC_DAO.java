package com.ODC.access.in.ub.DAO;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.ODC.access.in.ub.beans.ODC;
import com.ODC.access.in.ub.login.login;


@Repository 
public class ODC_DAO {
	
	
	@Autowired
	private JdbcTemplate jdbcTemplate; //OBJECT OF JDBC-TEMPLATE CLASS
	
	//---------------------------GETTER & SETTER--------------------------------------------------	


	public JdbcTemplate getJdbcTemplate() {
		return jdbcTemplate;
	}

	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}
	
	
	
	//-------------------------------READING------------------------------------------
	
	public List<ODC> findAll()
	{
		System.out.println("ODC DAO working");
		String sql="select * from employees_info";
		return jdbcTemplate.query(sql, new RowMapper<ODC>() {

			@Override
			public ODC mapRow(ResultSet rs, int rowNum) throws SQLException {
				ODC odc=new ODC();
				odc.setEmp_id(rs.getInt("emp_id"));
				odc.setName(rs.getString("name"));
				odc.setRole(rs.getString("role"));
				odc.setOdc(rs.getString("odc"));
				odc.setId_card(rs.getInt("id_card"));
				odc.setRequest(rs.getString("request"));
				return odc;
			}

	
	});
	}
	

//---------------------------------CREATING-------------------------------------------	
	
	public void save(ODC odc)
	{
		System.out.println("1st working");
		System.out.println(odc.toString());
String insert_query = "INSERT INTO employees_info(emp_id,name,role,id_card) VALUES (?,?,?,?)";
		int count = jdbcTemplate.update(insert_query,odc.getEmp_id(),odc.getName(),odc.getRole(),odc.getId_card());
		System.out.println(count);


		}


	

//--------------------------------UPDATING---------------------------------------------	
	
	public void update(ODC odc) {
		String update_query = "UPDATE employees_info SET odc =? WHERE emp_id=?";
		int count = jdbcTemplate.update(update_query,odc.getOdc(),odc.getEmp_id());
		System.out.println("Updated values are" + odc.getOdc());
	}
	
	//--------------------------------UPDATING---------------------------------------------	
	
		public void update_request(ODC odc) {
			String update_query = "UPDATE employees_info SET request =? WHERE emp_id=?";
			int count = jdbcTemplate.update(update_query,odc.getRequest(),odc.getEmp_id());
			System.out.println("Updated values are" + odc.getOdc());
		}
	
//------------------------------DELETE-------------------------------------------------	
	
	public void remove(ODC odc)
	{
		String delete_query="delete from employees_info where emp_id =?";
		jdbcTemplate.update(delete_query,odc.getEmp_id());
		System.out.println("deleted values are "+odc.getEmp_id()+ " " +odc.getName()+ " " +odc.getRole()+ " " +odc.getOdc());

	}
	
	
	
	public void update_id(ODC odc) {
		String update_query = "UPDATE employees_info SET id_card =? WHERE emp_id=?";
		int count = jdbcTemplate.update(update_query,odc.getId_card(),odc.getEmp_id());
		System.out.println("Updated values are" + odc.getOdc());
	}
	
	
	//---------------------------------------FETCH------------------------------
	public List<ODC> findAll1()
	{
		System.out.println("ODC DAO working");
		String sql="select * from employees_info";
		return jdbcTemplate.query(sql, new RowMapper<ODC>() {

			@Override
			public ODC mapRow(ResultSet rs, int rowNum) throws SQLException {
				ODC odc=new ODC();
				odc.setEmp_id(rs.getInt("emp_id"));
				return odc;
			}

			
		});
		}
	
	//---------------------------------------FETCH------------------------------
	public List<ODC> findAll2(int emp_id)
	{
		System.out.println("ODC DAO working");
		String sql="select * from employees_info where emp_id=?";
		return jdbcTemplate.query(sql,new Object[]{emp_id}, new RowMapper<ODC>() {

			@Override
			public ODC mapRow(ResultSet rs, int rowNum) throws SQLException {
				ODC odc=new ODC();
				odc.setEmp_id(rs.getInt("emp_id"));
				odc.setName(rs.getString("name"));
				odc.setRole(rs.getString("role"));
				odc.setOdc(rs.getString("odc"));
				odc.setId_card(rs.getInt("id_card"));
				odc.setRequest(rs.getString("request"));
				return odc;
			}

			
		});
	}}
			
	
	
	
	
	

	

