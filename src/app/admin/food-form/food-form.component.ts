import { Ingredient } from './../../models/ingredient.model';
import { IngredientsService } from './../../services/ingredients.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FoodsService } from 'src/app/services/foods.service';
import { FoodTypeService } from 'src/app/services/food-type.service';
import { FoodType } from 'src/app/models/food-type.model';

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.css'],
})
export class FoodFormComponent implements OnInit {
  @Input() _id: string;
  @Input() selectedFile: File;
  @Input() name: string;
  @Input() imgPath: string;
  @Input() ingredients: any[] = [];
  @Input() procedure: string;
  @Input() foodType: string;
  @Input() calories: number;

  @Input() fTitle: string = 'title';
  @Input() isAdding: boolean = false;
  @Input() isEditing: boolean = false;

  @Output() foodsEventEmitter = new EventEmitter();

  private ingredientList: Ingredient[];
  public searchResult: Ingredient[];
  public currentSearch: string;
  public foodTypes: Array<FoodType> = [];

  constructor(
    private ingredientService: IngredientsService,
    private foodService: FoodsService,
    private foodTypeService: FoodTypeService
  ) {}

  ngOnInit(): void {
    this.ingredientService.getIngredients().subscribe((res: Ingredient[]) => {
      this.ingredientList = res;
    });
    this.foodTypeService.getFoodType().subscribe((res: FoodType[]) => {
      this.foodTypes = res;
    });
  }

  searchIngredient(event) {
    let value: string = event.target.value;
    if (value.length > 0) {
      this.searchResult = this.ingredientList.filter((ingredient) => {
        let n: string = ingredient.name;
        if (n.toLowerCase().indexOf(value.toLowerCase()) > -1) {
          return ingredient;
        }
      });
    } else {
      this.searchResult = [];
    }
  }

  addSelectedFile(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  pushFood(data) {
    this.ingredients.push(data);
    this.currentSearch = '';
    this.searchResult = [];
  }

  addIngredient(data) {
    if (this.ingredients.length === 0) {
      this.pushFood(data);
    } else {
      if (!this.isIngredientExist(data)) {
        this.pushFood(data);
      } else {
        alert('Ingredient Already Exist...');
      }
    }
  }

  removeIngredient(data) {
    this.ingredients = this.ingredients.filter((ing) => {
      if (ing._id != data._id) return ing;
    });
  }

  isIngredientExist(data) {
    const checked = this.ingredients.filter((ing) => {
      if (ing._id == data._id) return ing;
    });
    if (checked.length === 0) return false;
    else return true;
  }

  resetForm() {
    this.name = '';
    this.imgPath = '';
    this.ingredientList = [];
    this.foodType = '';
    this.calories = 0;
    this.procedure = '';
  }

  addFood() {
    const param = {
      name: this.name,
      imgPath: '',
      ingredients: this.ingredients,
      foodType: this.foodType,
      calories: this.calories,
      procedure: this.procedure,
    };
    const formData = new FormData();
    formData.append('param', JSON.stringify(param));
    formData.append('img', this.selectedFile, this.selectedFile.name);
    this.foodService.addFoods(formData).subscribe((res) => {
      this.foodsEventEmitter.emit('add food done...');
      this.resetForm();
    });
  }

  editFood() {
    const param = {
      _id: this._id,
      name: this.name,
      imgPath: this.imgPath,
      ingredients: this.ingredients,
      foodType: this.foodType,
      calories: this.calories,
      procedure: this.procedure,
    };

    const formData = new FormData();

    formData.append('param', JSON.stringify(param));

    if (this.selectedFile) {
      formData.append('img', this.selectedFile, this.selectedFile.name);
    }

    this.foodService.editFoods(formData).subscribe((res) => {
      this.foodsEventEmitter.emit('edit food done...');
      this.resetForm();
    });
  }

  submit() {
    if (this.isAdding) {
      this.addFood();
    } else if (this.isEditing) {
      this.editFood();
    } else {
      alert('unknown submit type');
    }
  }
}
