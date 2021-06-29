import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { CreateAnimalComponent } from './create-animal/create-animal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { UpdateAnimalComponent } from './update-animal/update-animal.component';

const routes: Routes = [
  { path: '', redirectTo: 'animals', pathMatch: 'full' },
  { path: 'getanimals', component: AnimalListComponent },
  { path: 'addAnimal', component: CreateAnimalComponent },
  { path: 'update/:id', component: UpdateAnimalComponent },
  { path: 'details/:id', component: AnimalDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
