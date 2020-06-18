import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { IngredientComponent } from './ingredient-list/ingredient/ingredient.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodComponent } from './food-list/food/food.component';
import { FoodsService } from './services/foods.service';
import { IngredientsService } from './services/ingredients.service';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { IngredientFormComponent } from './admin/ingredient-form/ingredient-form.component';
import { FoodFormComponent } from './admin/food-form/food-form.component';
import { AppEventEmitterService } from './services/app-event-emitter.service';
import { SortByPipe } from './pipes/sort-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    IngredientListComponent,
    IngredientComponent,
    FoodListComponent,
    FoodComponent,
    AdminComponent,
    HomeComponent,
    IngredientFormComponent,
    FoodFormComponent,
    SortByPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [FoodsService, IngredientsService, AppEventEmitterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
