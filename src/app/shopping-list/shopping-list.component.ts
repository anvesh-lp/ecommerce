import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from "./shoppingList.service";
import {RecipeService} from "../recipes/recipe.service";

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
    ingredients: Ingredient[] = [];

    constructor(private shoppingListService: ShoppingListService, private recipeService: RecipeService) {
    }

    ngOnInit(): void {
        this.ingredients = this.shoppingListService.getIngredients();
        this.shoppingListService.ingredientEmitter.subscribe(ing => {
            this.ingredients = ing;
        })
    }

}
