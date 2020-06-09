import { Component, OnInit } from '@angular/core';
import { FoodsService } from '../services/foods.service';
import { Food } from '../models/food.model';
import { AppEventEmitterService } from '../services/app-event-emitter.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
})
export class FoodListComponent implements OnInit {
  public foods: Food[];
  private foodService: FoodsService;

  constructor(
    foodService: FoodsService,
    private messageService: AppEventEmitterService
  ) {}

  ngOnInit(): void {
    // this.messageService.message$.subscribe((message: any) => {
    //   console.log(message);
    // });
    this.foodService.getFoods().subscribe((res: Food[]) => {
      this.foods = res;
    });
  }

  onSearch(event: any) {
    this.foods = this.foodService.getFood(event.target.value);
  }

  generateFood(data: any) {
    console.log(data);
  }
}
