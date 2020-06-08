import { IngredientsService } from './../services/ingredients.service';
import { FoodsService } from './../services/foods.service';
import { HttpClient } from '@angular/common/http';
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

  public isAdding: boolean = true;
  public isEditing: boolean = true;

  constructor(
    private http: HttpClient,
    private foodService: FoodsService,
    private ingredientsService: IngredientsService
  ) {}

  ngOnInit(): void {
    this.getIngredients();
  }

  getIngredients() {
    this.ingredientsService.getIngredients().subscribe((res: Ingredient[]) => {
      this.ingredients = res;
    });
  }

  deleteIngredient(_id) {
    this.ingredientsService.deleteIngredients(_id).subscribe((res) => {
      this.getIngredients();
    });
  }
}
