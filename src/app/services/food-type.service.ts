import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FoodType } from '../models/food-type.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FoodTypeService {
  private apiUrl = environment.apiURL;

  constructor(private http: HttpClient) {}

  getFoodType() {
    return this.http.get(`${this.apiUrl}/food-types`);
  }

  addFoodType(obj: FoodType) {
    return this.http.post(`${this.apiUrl}/food-types`, obj);
  }

  updateFoodType(obj: FoodType) {
    return this.http.put(`${this.apiUrl}/food-types`, obj);
  }

  removeFoodType(_id: string) {
    return this.http.delete(`${this.apiUrl}/food-types/${_id}`);
  }
}
