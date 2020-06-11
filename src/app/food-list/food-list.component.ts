import { Component, OnInit, OnDestroy } from '@angular/core';
import { FoodsService } from '../services/foods.service';
import { Food } from '../models/food.model';
import { Ingredient } from '../models/ingredient.model';
import { AppEventEmitterService } from '../services/app-event-emitter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
})
export class FoodListComponent implements OnInit, OnDestroy {
  public foods: Food[] = [];
  public selectedIngredients: Ingredient[] = [];
  subscription: Subscription;

  constructor(
    private foodService: FoodsService,
    private appEventEmitter: AppEventEmitterService
  ) {}

  ngOnInit(): void {
    this.subscription = this.appEventEmitter.message$.subscribe((data) => {
      console.log(1, data);
      // this.generateFoods(data);
    });
    this.getFoods();
  }

  getFoods() {
    this.foodService.getFoods().subscribe((res: Food[]) => {
      this.foods = res;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSearch(event: any) {
    this.foods = this.foodService.getFood(event.target.value);
  }

  generateFoods(data: string[]) {
    if (data.length > 0) {
      this.foodService.generateFoods(data).subscribe((res: Food[]) => {
        this.foods = res;
      });
    } else {
      this.getFoods();
    }
  }
}
