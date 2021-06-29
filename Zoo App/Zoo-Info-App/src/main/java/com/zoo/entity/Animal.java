package com.zoo.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="zoo_animal")
public class Animal {
    @Id
    @GeneratedValue
    private int id;
    private String aname;
    private String atype;
    private String aspecies;
    private String parea;
    private int count;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getAname() {
		return aname;
	}
	public void setAname(String aname) {
		this.aname = aname;
	}
	public String getAtype() {
		return atype;
	}
	public void setAtype(String atype) {
		this.atype = atype;
	}
	public String getAspecies() {
		return aspecies;
	}
	public void setAspecies(String aspecies) {
		this.aspecies = aspecies;
	}
	public String getParea() {
		return parea;
	}
	public void setParea(String parea) {
		this.parea = parea;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	public Animal(int id, String aname, String atype, String aspecies, String parea, int count) {
		super();
		this.id = id;
		this.aname = aname;
		this.atype = atype;
		this.aspecies = aspecies;
		this.parea = parea;
		this.count = count;
	}
	
	public Animal() {
		
	}
	
    
	
}
