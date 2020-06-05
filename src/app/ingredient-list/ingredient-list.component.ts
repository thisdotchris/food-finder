import { Ingredient } from './../models/ingredient.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IngredientsService } from '../services/ingredients.service';
import { AppEventEmitterService } from '../services/app-event-emitter.service';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {

  public ingredients: Ingredient[];
  private ingredientService: IngredientsService;

  constructor(ingredientService: IngredientsService, private messageService: AppEventEmitterService) {
    this.ingredientService = ingredientService;
    this.ingredients = ingredientService.getIngredients();
  }

  select(id: number, status: boolean) {
    this.ingredients.map(ing => {
      if (ing.id == id)
        ing.selected = status
      return ing;
    })
  }

  onSearch(event: any) {
    this.ingredients = this.ingredientService.getIngredient(event.target.value);
  }

  generate() {
    const selectedIngredients = this.ingredients.filter(i => i.selected === true);
    if (selectedIngredients.length === 0)
      alert('no ingredients selected. please select ingredients');
    else
      this.messageService.sendMessage(selectedIngredients);
  }

  ngOnInit(): void {
  }

}
