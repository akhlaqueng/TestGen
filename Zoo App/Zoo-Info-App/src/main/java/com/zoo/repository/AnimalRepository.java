package com.zoo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zoo.entity.Animal;

public interface AnimalRepository  extends JpaRepository<Animal,Integer>{
	 List<Animal> findByAtype(String atype);
}
