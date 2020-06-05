import { Component, OnInit, Input } from '@angular/core';
import { Food } from '../../models/food.model';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  @Input() food: Food;

  constructor() {
  }

  ngOnInit(): void {
  }

  generateFood(ingredient: any) {
    console.log(ingredient)
  }

}
