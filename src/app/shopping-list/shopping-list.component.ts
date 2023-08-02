import {Component} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Chicken', 2),
    new Ingredient('Rice', 4),
  ];

  protected readonly Ingredient = Ingredient;

  onNewIngredient($event: Ingredient) {
    this.ingredients.push($event);
  }
}
