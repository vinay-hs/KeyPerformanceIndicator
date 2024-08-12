package com.spring.kpi.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Vertical {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String verticalName;
	public Vertical() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Vertical(Long id, String verticalName) {
		super();
		this.id = id;
		this.verticalName = verticalName;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getVerticalName() {
		return verticalName;
	}
	public void setVerticalName(String verticalName) {
		this.verticalName = verticalName;
	}
	@Override
	public String toString() {
		return "Vertical [id=" + id + ", verticalName=" + verticalName + "]";
	}
	
	
}
