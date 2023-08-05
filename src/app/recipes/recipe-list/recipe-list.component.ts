import {Component, EventEmitter, Output} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [];
  /* recipes: Recipe[] = [
     new Recipe(
       'Biryani',
       'A spicy south Indian dish',
       'https://norecipes.com/wp-content/uploads/2017/05/chicken-biryani-006.jpg'
     ),
     new Recipe(
       'Chicken Biryani',
       'A spicy south Indian dish',
       'https://recipe30.com/wp-content/uploads/2023/03/chicken-Biryani.jpg'
     ),
   ];*/

  @Output() clickedRecipe = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService) {
    this.recipes = recipeService.getRecipes();
  }

  recipeClicked($event: Recipe) {
    this.clickedRecipe.emit($event)
  }
}
