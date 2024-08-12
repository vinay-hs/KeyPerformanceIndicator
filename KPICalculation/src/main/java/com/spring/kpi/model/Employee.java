package com.spring.kpi.model;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

@Entity
public class Employee {

	@Id
	private String id;
	
	private String firstName;
	private String lastName;
	private LocalDate joinedDate;
	private String role;
	private Long salary;
	
	@ManyToOne
	private Vertical vertical;
	
	@ManyToMany
	private List<Account> accounts;

	public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Employee(String id, String firstName, String lastName, LocalDate joinedDate, String role, Long salary,
			Vertical vertical, List<Account> accounts) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.joinedDate = joinedDate;
		this.role = role;
		this.salary = salary;
		this.vertical = vertical;
		this.accounts = accounts;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public LocalDate getJoinedDate() {
		return joinedDate;
	}

	public void setJoinedDate(LocalDate joinedDate) {
		this.joinedDate = joinedDate;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public Long getSalary() {
		return salary;
	}

	public void setSalary(Long salary) {
		this.salary = salary;
	}

	public Vertical getVertical() {
		return vertical;
	}

	public void setVertical(Vertical vertical) {
		this.vertical = vertical;
	}

	public List<Account> getAccounts() {
		return accounts;
	}

	public void setAccounts(List<Account> accounts) {
		this.accounts = accounts;
	}

	@Override
	public String toString() {
		return "Employee [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", joinedDate="
				+ joinedDate + ", role=" + role + ", salary=" + salary + ", vertical=" + vertical + ", accounts="
				+ accounts + "]";
	}

	
}
