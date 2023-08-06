import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";

export class RecipeService {
    selectedRecipeEmit = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Biryani',
            'A spicy south Indian dish',
            'https://norecipes.com/wp-content/uploads/2017/05/chicken-biryani-006.jpg',
            [new Ingredient("rice", 2),
                new Ingredient("water", 2),
                new Ingredient("ghee", 3)]
        ),
        new Recipe(
            'Chicken Biryani',
            'A spicy south Indian dish',
            'https://recipe30.com/wp-content/uploads/2023/03/chicken-Biryani.jpg',
            [new Ingredient("rice", 2),
                new Ingredient("water", 2),
                new Ingredient("chicken", 3)]
        ),
    ];


    getRecipes() {
        return [...this.recipes];
    }
}
