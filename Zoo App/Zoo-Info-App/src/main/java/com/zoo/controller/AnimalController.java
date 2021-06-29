package com.zoo.controller;

import java.util.List;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.zoo.entity.Animal;
import com.zoo.repository.AnimalRepository;

@CrossOrigin(origins = "*")
@RestController
public class AnimalController {
	
	@Autowired
	private AnimalRepository repository;
	
	@PostMapping("/addanimal")
    public String addanimal(@RequestBody Animal animal) {
        repository.save(animal);
        return "Animal successfully Added";
    }
    
    @GetMapping("/getanimals")
    public List<Animal> findAllAnimals() {
        return repository.findAll();
    }

    @GetMapping("/findAnimal/{type}")
    public List<Animal> findUser(@PathVariable String email) {
        return repository.findByAtype(email);
    }

    @DeleteMapping("/delete/{id}")
    public List<Animal> deleteAnimal(@PathVariable int id) {
        repository.deleteById(id);
        return repository.findAll();
    }


}
