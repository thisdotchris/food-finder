import { Component, OnInit, ViewChild } from '@angular/core';
import { FoodListComponent } from '../food-list/food-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public selectedIngredients: any[] = [];
  private ids: Array<string> = [];
  @ViewChild(FoodListComponent) private foodListComponent: FoodListComponent;

  constructor() {}

  ngOnInit(): void {}

  selectIngredient(ing) {
    const checked = this.selectedIngredients.find((e) => e._id == ing._id);
    if (!checked) this.selectedIngredients.push(ing);
    const ids = this.selectedIngredients.map((e) => e._id);
    this.ids = ids;
    // this.foodListComponent.generateFoods(ids);
  }

  generateFood() {
    this.foodListComponent.generateFoods(this.ids);
  }

  removeSelectedIngredient(idx) {
    this.selectedIngredients.splice(idx, 1);
    const ids = this.selectedIngredients.map((e) => e._id);
    this.ids = ids;
    // this.foodListComponent.generateFoods(ids);
  }
}
