package com.spring.kpi.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class EmployeeTask {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private LocalDate startDate;
	private LocalDate endDate;
	private String expectedPercentage;
	private String achievedPercentage;
	
	@OneToOne
	private Task task;
	
	@OneToOne
	private Employee employee;

	public EmployeeTask() {
		super();
		// TODO Auto-generated constructor stub
	}

	public EmployeeTask(Long id, LocalDate startDate, LocalDate endDate, String expectedPercentage,
			String achievedPercentage, Task task, Employee employee) {
		super();
		this.id = id;
		this.startDate = startDate;
		this.endDate = endDate;
		this.expectedPercentage = expectedPercentage;
		this.achievedPercentage = achievedPercentage;
		this.task = task;
		this.employee = employee;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public LocalDate getStartDate() {
		return startDate;
	}

	public void setStartDate(LocalDate startDate) {
		this.startDate = startDate;
	}

	public LocalDate getEndDate() {
		return endDate;
	}

	public void setEndDate(LocalDate endDate) {
		this.endDate = endDate;
	}

	public String getExpectedPercentage() {
		return expectedPercentage;
	}

	public void setExpectedPercentage(String expectedPercentage) {
		this.expectedPercentage = expectedPercentage;
	}

	public String getAchievedPercentage() {
		return achievedPercentage;
	}

	public void setAchievedPercentage(String achievedPercentage) {
		this.achievedPercentage = achievedPercentage;
	}

	public Task getTask() {
		return task;
	}

	public void setTask(Task task) {
		this.task = task;
	}

	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}

	@Override
	public String toString() {
		return "EmployeeTask [id=" + id + ", startDate=" + startDate + ", endDate=" + endDate + ", expectedPercentage="
				+ expectedPercentage + ", achievedPercentage=" + achievedPercentage + ", task=" + task + ", employee="
				+ employee + "]";
	}
	
	
}
