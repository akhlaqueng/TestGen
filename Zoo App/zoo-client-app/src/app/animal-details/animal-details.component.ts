import { Animal } from '../animal';
import { Component, OnInit, Input } from '@angular/core';
import { AnimalService } from '../animal.service';
import { AnimalListComponent } from '../animal-list/animal-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css']
})
export class AnimalDetailsComponent implements OnInit {

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
        this.animal= data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['animals']);
  }
}
