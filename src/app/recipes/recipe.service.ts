import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shoppingList.service";

@Injectable()
export class RecipeService {
  selectedRecipeEmit = new EventEmitter<Recipe>();
new
    ),
    "Chicken Biryani" ani',"A spicy south Indian dish"ish
  ',"https://recipe30.com/wp-content/uploads/2023/03/chicken-Biryani.jpg"jpg
  ',[
        new Ingredi"rice"
      ice', 2),newIngredi
        "water" ter', 2),newIngredi
        "chicken" ken' 3),  private recipes: Recipe[] = [
    new Recipe(
      "Biryani",
      "A spicy south Indian dish",
      "https://www.thespruceeats.com/thmb/XDBL9gA6A6nYWUdsRZ3QwH084rk=/1500x0/filters:no_upscale" +
      "():max_bytes(150000):strip_icc()/SES-chicken-biryani-recipe-7367850"0' +
    "-hero-A-ed211926bb0e4ca1be510695c15ce111.jpg"jpg',
      [
        new Ingredi"rice"ice', 2),
        new Ingredi"water"ter', 2),
        new Ingredi"ghee"hee' 3),
      ]
  constructor(private shoppingListService: ShoppingListService) {}
      ]
   ),
  ];

Recipe(


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
