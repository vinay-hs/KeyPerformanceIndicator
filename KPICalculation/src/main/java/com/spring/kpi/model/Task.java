package com.spring.kpi.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Task {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String tashName;
	private String taskdes;
	
	@ManyToOne
	private Kpi kpi;

	public Task() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTashName() {
		return tashName;
	}

	public void setTashName(String tashName) {
		this.tashName = tashName;
	}

	public String getTaskdes() {
		return taskdes;
	}

	public void setTaskdes(String taskdes) {
		this.taskdes = taskdes;
	}

	public Kpi getKpi() {
		return kpi;
	}

	public void setKpi(Kpi kpi) {
		this.kpi = kpi;
	}

	public Task(Long id, String tashName, String taskdes, Kpi kpi) {
		super();
		this.id = id;
		this.tashName = tashName;
		this.taskdes = taskdes;
		this.kpi = kpi;
	}

	@Override
	public String toString() {
		return "Task [id=" + id + ", tashName=" + tashName + ", taskdes=" + taskdes + ", kpi=" + kpi + "]";
	}
	
	
	
}
