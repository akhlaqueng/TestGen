import { AnimalService } from '../animal.service';
import { Animal } from '../animal';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-animal',
  templateUrl: './create-animal.component.html',
  styleUrls: ['./create-animal.component.css']
})
export class CreateAnimalComponent implements OnInit {

  animal: Animal = new Animal();
  submitted = false;

  constructor(private animalService: AnimalService,
    private router: Router) { }

  ngOnInit() {
  }

  newAnimal(): void {
    this.submitted = false;
    this.animal= new Animal();
  }

  save() {
    this.animalService
    .createAnimal(this.animal).subscribe(data => {
      console.log(data)
      this.animal = new Animal();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['animals']);
  }
}
