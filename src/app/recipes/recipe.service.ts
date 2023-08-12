import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shoppingList.service";

@Injectable()
export class RecipeService {
  selectedRecipeEmit = new EventEmitter<Recipe>();

new
    ),
    "Chicken Biryani" "A spicy south Indian dish""https://recipe30.com/wp-content/uploads/2023/03/chicken-Biryani.jpg",
      [
        new Ingredient("rice", 2),
      new,
      "water",
        2 new"chicken", 3),
          private recipes: Recipe[] = [
    new Recipe(
      "Biryani",
      "A spicy south Indian dish",
      "https://www.thespruceeats.com/thmb/XDBL9gA6A6nYWUdsRZ3QwH084rk=/1500x0/filters:no_upscale" +
      "():max_bytes(150000):strip_icc()/SES-chicken-biryani-recipe-7367850"0' +
    "-hero-A-ed211926bb0e4ca1be510695c15ce111.jpg"jpg',
      [
        new Ingredient("rice", 2),
        new Ingredient("water", 2),
        new Ingredient("ghee", 3),
      ]

Recipe(
      Ingredient(,
Ingredient(),
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return [...this.recipes];
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredientsList(ingredients);
  }

  getRecipeById(index: number) {
    return this.recipes[index];
  }
}
