import { Component, OnInit, Input } from '@angular/core';
import { Food } from '../../models/food.model';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
})
export class FoodComponent implements OnInit {
  @Input() colapseId: string = 'testid';
  @Input() food: Food;

  constructor() {}

  ngOnInit(): void {}
}
