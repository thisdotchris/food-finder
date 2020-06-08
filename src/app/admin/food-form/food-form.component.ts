import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.css'],
})
export class FoodFormComponent implements OnInit {
  private apiUrl: string = 'http://localhost:3000/v1';
  private selectedFile: File;
  public name: string;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
  addSelectedFile(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  addIngredient() {
    const formdata = new FormData();
    const param = {
      name: this.name,
      imgPath: '',
      selected: false,
    };
    formdata.append('param', JSON.stringify(param));
    formdata.append('img', this.selectedFile, this.selectedFile.name);

    this.http.post(`${this.apiUrl}/ingredients`, formdata).subscribe((res) => {
      console.log(res);
    });
  }
}
