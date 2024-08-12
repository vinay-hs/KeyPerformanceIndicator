package com.spring.kpi.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Kpi {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String kpiName;
	private String description;
	public Kpi() {
		super();
	}
	public Kpi(Long id, String kpiName, String description) {
		super();
		this.id = id;
		this.kpiName = kpiName;
		this.description = description;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getKpiName() {
		return kpiName;
	}
	public void setKpiName(String kpiName) {
		this.kpiName = kpiName;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	@Override
	public String toString() {
		return "Kpi [id=" + id + ", kpiName=" + kpiName + ", description=" + description + "]";
	}
	
	
}
