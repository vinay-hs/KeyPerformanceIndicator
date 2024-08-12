package com.spring.kpi.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class VerticalKpiMap {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String validYear;
	private String description;
	
	@OneToOne
	private Vertical vertical;
	
	@OneToOne
	private Kpi kpi;

	public VerticalKpiMap() {
		super();
	}

	public VerticalKpiMap(Long id, String validYear, String description, Vertical vertical, Kpi kpi) {
		super();
		this.id = id;
		this.validYear = validYear;
		this.description = description;
		this.vertical = vertical;
		this.kpi = kpi;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getValidYear() {
		return validYear;
	}

	public void setValidYear(String validYear) {
		this.validYear = validYear;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Vertical getVertical() {
		return vertical;
	}

	public void setVertical(Vertical vertical) {
		this.vertical = vertical;
	}

	public Kpi getKpi() {
		return kpi;
	}

	public void setKpi(Kpi kpi) {
		this.kpi = kpi;
	}

	@Override
	public String toString() {
		return "VerticalKpiMap [id=" + id + ", validYear=" + validYear + ", description=" + description + ", vertical="
				+ vertical + ", kpi=" + kpi + "]";
	}
	
	
}
