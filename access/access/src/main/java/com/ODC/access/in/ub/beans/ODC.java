package com.ODC.access.in.ub.beans;

public class ODC {
	private int emp_id;
	private String name;
	private String role;
	private String odc;
	private int id_card;
	private String request;

	
	//---------------------------GETTER & SETTER--------------------------------------------------	
	
	public int getEmp_id() {
		return emp_id;
	}
	public void setEmp_id(int emp_id) {
		this.emp_id = emp_id;
	}
	
	//---------------------------GETTER & SETTER--------------------------------------------------	
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	//---------------------------GETTER & SETTER--------------------------------------------------	

	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	
	
	//---------------------------GETTER & SETTER--------------------------------------------------	

	public String getOdc() {
		return odc;
	}
	@Override
	public String toString() {
		return "ODC [emp_id=" + emp_id + ", name=" + name + ", role=" + role + ", odc=" + odc + ", id_card=" + id_card
				+ ", request=" + request + "]";
	}
	public void setOdc(String odc) {
		this.odc = odc;
	}
	
	//---------------------------GETTER & SETTER--------------------------------------------------	
	public int getId_card() {
		return id_card;
	}
	public void setId_card(int id_card) {
		this.id_card = id_card;
	}

	
	//---------------------------GETTER & SETTER--------------------------------------------------	
	public String getRequest() {
		return request;
	}
	public void setRequest(String request) {
		this.request = request;
	}
}
