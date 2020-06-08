import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class IngredientsService {
  private apiUrl = 'http://localhost:3000/v1';
  public ingredients: Ingredient[];

  private httpGetIngredients() {
    return this.http.get(`${this.apiUrl}/ingredients`);
  }

  constructor(private http: HttpClient) {
    this.httpGetIngredients().subscribe((res: Ingredient[]) => {
      this.ingredients = res;
    });
  }

  getIngredients() {
    return this.httpGetIngredients();
  }

  getIngredient(name: string) {
    return <Ingredient[]>this.ingredients.filter((ing) => {
      if (ing.name.toLowerCase().indexOf(name.toLowerCase()) > -1) {
        return ing;
      }
    });
  }

  addIngredients(form: FormData) {
    return this.http.post(`${this.apiUrl}/ingredients`, form);
  }

  updateIngredients(form: FormData) {
    return this.http.put(`${this.apiUrl}/ingredients`, form);
  }

  deleteIngredients(_id) {
    return this.http.delete(`${this.apiUrl}/ingredients/${_id}`);
  }
}
