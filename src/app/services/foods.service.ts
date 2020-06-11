import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Food } from '../models/food.model';

@Injectable({
  providedIn: 'root',
})
export class FoodsService {
  private apiUrl = 'http://localhost:3000/v1';
  public foods: Food[];

  private httpGetFoods() {
    return this.http.get(`${this.apiUrl}/foods`);
  }

  constructor(private http: HttpClient) {
    this.httpGetFoods().subscribe((res: [Food]) => {
      this.foods = res;
    });
  }

  generateFoods(ingredientsIds) {
    return this.http.post(`${this.apiUrl}/foods/generate`, {
      ids: ingredientsIds,
    });
  }

  getFoods() {
    return this.httpGetFoods();
  }

  getFood(name: string) {
    return this.foods.filter((f) => {
      if (f.name.toLowerCase().indexOf(name.toLowerCase()) > -1) {
        return f;
      }
    });
  }

  addFoods(form: FormData) {
    return this.http.post(`${this.apiUrl}/foods`, form);
  }

  editFoods(form: FormData) {
    return this.http.put(`${this.apiUrl}/foods`, form);
  }

  deleteFood(_id) {
    return this.http.delete(`${this.apiUrl}/foods/${_id}`);
  }
}
