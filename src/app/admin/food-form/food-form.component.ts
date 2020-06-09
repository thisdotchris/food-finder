import { Ingredient } from './../../models/ingredient.model';
import { IngredientsService } from './../../services/ingredients.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  @Input() ingredients;
  @Input() procedure: string;

  @Input() fTitle: string = 'title';
  @Input() isAdding: boolean = false;
  @Input() isEditing: boolean = false;
  @Output() foodsEventEmitter = new EventEmitter();

  private ingredientList: Ingredient[];
  public searchResult: Ingredient[];
  public currentSearch: string;

  constructor(private ingredientService: IngredientsService) {}

  ngOnInit(): void {
    this.ingredientService.getIngredients().subscribe((res: Ingredient[]) => {
      this.ingredientList = res;
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

  addIngredient(data) {
    if (!this.isIngredientExist(data)) {
      this.ingredients.push(data);
      this.currentSearch = '';
      this.searchResult = [];
    } else {
      alert('Ingredient Already Exist...');
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

  addFood() {
    const param = {
      name: this.name,
      imgPath: '',
      ingredients: [],
      procedure: '',
    };
    console.log('add food', param);
  }

  editFood() {
    const param = {
      name: this.name,
      imgPath: this.imgPath,
      ingredients: this.ingredients,
      procedure: this.procedure,
    };
    console.log('edit food', param);
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
