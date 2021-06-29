import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private baseUrl = 'http://localhost:9090/getanimals';

  constructor(private http: HttpClient) { }

  getAnimal(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createAnimal(animal: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, animal);
  }

  updateAnimal(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteAnimal(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAnimalsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
