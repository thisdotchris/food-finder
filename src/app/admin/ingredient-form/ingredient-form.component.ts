import { IngredientsService } from './../../services/ingredients.service';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css'],
})
export class IngredientFormComponent implements OnInit {
  @Input() _id: string;
  @Input() selectedFile: File;
  @Input() name: string;
  @Input() imgPath: string;

  @Input() fTitle: string = 'title';
  @Input() isAdding: boolean = false;
  @Input() isEditing: boolean = false;
  @Input() isDeleting: boolean = false;

  @Output() ingredientEventEmitter = new EventEmitter();

  constructor(
    private http: HttpClient,
    private ingredientsService: IngredientsService
  ) {}

  ngOnInit(): void {}

  addSelectedFile(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  addIngredient() {
    const formdata = new FormData();
    const param = {
      name: this.name,
      imgPath: this.imgPath,
      selected: false,
    };

    formdata.append('param', JSON.stringify(param));
    formdata.append('img', this.selectedFile, this.selectedFile.name);

    this.ingredientsService.addIngredients(formdata).subscribe((res) => {
      this.ingredientEventEmitter.emit('done adding...');
    });
  }

  editIngredient() {
    const formdata = new FormData();
    const param = {
      _id: this._id,
      name: this.name,
      imgPath: this.imgPath,
      selected: false,
    };

    formdata.append('param', JSON.stringify(param));

    if (this.selectedFile)
      formdata.append('img', this.selectedFile, this.selectedFile.name);

    this.ingredientsService.updateIngredients(formdata).subscribe((res) => {
      this.ingredientEventEmitter.emit('done editing...');
    });
  }

  submit() {
    if (this.isAdding) {
      this.addIngredient();
    } else if (this.isEditing) {
      this.editIngredient();
    } else {
      alert('unknown submit type');
    }
  }
}
