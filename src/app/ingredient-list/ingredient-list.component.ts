import { Ingredient } from './../models/ingredient.model';
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { IngredientsService } from '../services/ingredients.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css'],
})
export class IngredientListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  subscription: Subscription;
  searchResult: Ingredient[];
  currentSearch: string;

  @Output() public eventEmitter = new EventEmitter();

  constructor(private ingredientService: IngredientsService) {}

  select(id: string, status: boolean) {
    this.ingredients.map((ing) => {
      if (ing._id == id) ing.selected = status;
      return ing;
    });
  }

  onSearch(event: any) {
    if (event.target.value == '') {
      // this.searchResult = [];
      this.searchResult = this.ingredients;
    } else {
      this.searchResult = this.ingredientService.getIngredient(
        event.target.value
      );
    }
  }

  generate() {}

  ngOnInit(): void {
    this.ingredientService.getIngredients().subscribe((data: Ingredient[]) => {
      this.ingredients = data;
      this.searchResult = data;
    });
  }

  ngOnDestroy(): void {}

  addToSelectedIngredients(ing) {
    this.searchResult = [];
    this.currentSearch = '';
    this.eventEmitter.emit(ing);
  }
}
