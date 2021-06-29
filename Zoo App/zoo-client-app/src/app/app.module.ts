import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAnimalComponent } from './create-animal/create-animal.component';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateAnimalComponent } from './update-animal/update-animal.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateAnimalComponent,
    AnimalDetailsComponent,
    AnimalListComponent,
    UpdateAnimalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
