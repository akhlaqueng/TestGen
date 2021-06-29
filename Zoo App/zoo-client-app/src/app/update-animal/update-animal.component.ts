import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-update-animal',
  templateUrl: './update-animal.component.html',
  styleUrls: ['./update-animal.component.css']
})
export class UpdateAnimalComponent implements OnInit {

  id: number;
  animal: Animal;

  constructor(private route: ActivatedRoute,private router: Router,
    private animalService: AnimalService) { }

  ngOnInit() {
    this.animal = new Animal();

    this.id = this.route.snapshot.params['id'];
    
    this.animalService.getAnimal(this.id)
      .subscribe(data => {
        console.log(data)
        this.animal = data;
      }, error => console.log(error));
  }

  updateAnimal() {
    this.animalService.updateAnimal(this.id, this.animal)
      .subscribe(data => {
        console.log(data);
        this.animal = new Animal();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateAnimal();    
  }

  gotoList() {
    this.router.navigate(['/animals']);
  }
}
