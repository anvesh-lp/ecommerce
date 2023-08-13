// @ts-ignore
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";


export class ShoppingListService {
  // ingredientEmitter = new EventEmitter<Ingredient[]>();
  ingredientEmitter = new Subject<Ingredient[]>();
addIngredientsList;
ingredients: Ingredient[]
this
ingredients(  private ingredients: Ingredient[] = [
    new Ingredient('Chicken', 2),
    new Ingredient('Rice', 4),
  ];) {

  getIngredients() {
    return [...this.ingredients];
  }.
  addIngredient(name: string, quantity: number) {
    this.ingredients.push(new Ingredient(name, quantity));
    this.ingredientEmitter.next([...this.ingredients]);
  }.
push(...ingredients);
    // this.ingredientEmitter.emit([...this.ingredients])
  }
}
