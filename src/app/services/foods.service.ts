import { Injectable } from '@angular/core';
import { Food } from '../models/food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  public foods: Food[] = [
    {
      id: 1,
      name: 'food1',
      ingredients: [
        'ing1',
        'ing2',
        'ing3'
      ],
      procedure: 'food1 procedure',
      imgPath: 'https://sf.mariefranceasia.com/wp-content/uploads/sites/7/2013/07/fish-food-dish1.jpg'
    },
    {
      id: 2,
      name: 'food2',
      ingredients: [
        'my1',
        'my2'
      ],
      procedure: 'food1 procedure',
      imgPath: 'https://sf.mariefranceasia.com/wp-content/uploads/sites/7/2013/07/fish-food-dish1.jpg'
    },
    {
      id: 3,
      name: 'food3',
      ingredients: [
        'ing1',
        'ing2',
        'ing3',
        'ing4',
        'ing5'
      ],
      procedure: 'food2 procedure',
      imgPath: 'https://sf.mariefranceasia.com/wp-content/uploads/sites/7/2013/07/fish-food-dish1.jpg'
    },
    {
      id: 4,
      name: 'food4',
      ingredients: [
        'ing1',
        'ing2',
        'ing3',
        'ing4',
        'ing5'
      ],
      procedure: 'food2 procedure',
      imgPath: 'https://sf.mariefranceasia.com/wp-content/uploads/sites/7/2013/07/fish-food-dish1.jpg'
    },
    {
      id: 5,
      name: 'food5',
      ingredients: [
        'ing1',
        'ing2',
        'ing3',
        'ing4',
        'ing5'
      ],
      procedure: 'food2 procedure',
      imgPath: 'https://sf.mariefranceasia.com/wp-content/uploads/sites/7/2013/07/fish-food-dish1.jpg'
    }
  ];

  constructor() { }

  getFoods(): Food[] {
    return this.foods;
  }

  getFood(name: string) {
    return this.foods.filter(f => {
      if (f.name.toLowerCase().indexOf(name.toLowerCase()) > -1) {
        return f;
      }
    })
  }

}