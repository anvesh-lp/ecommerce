// @ts-ignore
import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";


export class ShoppingListService {
    ingredientEmitter = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Chicken', 2),
        new Ingredient('Rice', 4),
    ];

    getIngredients() {
        return [...this.ingredients]
    }

    addIngredient(name: string, quantity: number) {
        this.ingredients.push(new Ingredient(name, quantity));
        this.ingredientEmitter.emit([...this.ingredients])
    }

    addIngredientsList(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        // this.ingredientEmitter.emit([...this.ingredients])
    }
}
