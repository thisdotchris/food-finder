import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { IngredientComponent } from './ingredient-list/ingredient/ingredient.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodComponent } from './food-list/food/food.component';
import { FoodsService } from './services/foods.service';
import { IngredientsService } from './services/ingredients.service';
import { AppEventEmitterService } from './services/app-event-emitter.service';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    IngredientListComponent,
    IngredientComponent,
    FoodListComponent,
    FoodComponent,
    AdminComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    FoodsService,
    IngredientsService,
    AppEventEmitterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
