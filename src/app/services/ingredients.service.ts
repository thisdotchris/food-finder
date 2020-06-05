import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  public ingredients: Ingredient[] = [
    {
      id: 1,
      name: 'ing1',
      imgPath: 'https://californiaoliveranch.com/wp-content/uploads/2019/02/COR-5IngredientMeals-021319_096.jpg',
      selected: false
    },
    {
      id: 2,
      name: 'my2',
      imgPath: 'https://californiaoliveranch.com/wp-content/uploads/2019/02/COR-5IngredientMeals-021319_096.jpg',
      selected: false
    },
    {
      id: 3,
      name: 'ing2',
      imgPath: 'https://californiaoliveranch.com/wp-content/uploads/2019/02/COR-5IngredientMeals-021319_096.jpg',
      selected: false
    },
    {
      id: 4,
      name: 'ing3',
      imgPath: 'https://californiaoliveranch.com/wp-content/uploads/2019/02/COR-5IngredientMeals-021319_096.jpg',
      selected: false
    },
    {
      id: 5,
      name: 'my3',
      imgPath: 'https://californiaoliveranch.com/wp-content/uploads/2019/02/COR-5IngredientMeals-021319_096.jpg',
      selected: false
    },
    {
      id: 6,
      name: 'tr3',
      imgPath: 'https://californiaoliveranch.com/wp-content/uploads/2019/02/COR-5IngredientMeals-021319_096.jpg',
      selected: false
    }
  ];

  constructor() {
  }

  getIngredients(): Ingredient[] {
    return this.ingredients;
  }

  getIngredient(name: string) {
    return this.ingredients.filter((ing) => {
      if (ing.name.toLowerCase().indexOf(name.toLowerCase()) > -1) {
        return ing;
      }
    })
  }

}