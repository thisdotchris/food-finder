import { IngredientsService } from './../services/ingredients.service';
import { FoodsService } from './../services/foods.service';
import { Component, OnInit } from '@angular/core';
import { Food } from '../models/food.model';
import { Ingredient } from '../models/ingredient.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  public ingredients: Ingredient[];
  public foods: Food[];

  public addIngredient: string = 'Add Ingredient';
  public editIngredient: string = 'Edit Ingredient';

  public addFood: string = 'Add Food';
  public editFood: string = 'Edit Food';

  public isAdding: boolean = true;
  public isEditing: boolean = true;

  constructor(
    private foodService: FoodsService,
    private ingredientsService: IngredientsService
  ) {}

  ngOnInit(): void {
    this.getIngredients();
    this.getFoods();
  }

  getIngredients() {
    this.ingredientsService.getIngredients().subscribe((res: Ingredient[]) => {
      this.ingredients = res;
    });
  }

  getFoods() {
    this.foodService.getFoods().subscribe((res: Food[]) => {
      console.log(res);
      this.foods = res;
    });
  }

  deleteIngredient(_id) {
    this.ingredientsService.deleteIngredients(_id).subscribe((res) => {
      this.getIngredients();
    });
  }

  deleteFood(_id) {
    this.foodService.deleteFood(_id).subscribe((res) => {
      this.getFoods();
    });
  }
}
