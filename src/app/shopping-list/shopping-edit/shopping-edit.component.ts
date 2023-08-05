import {Component, ElementRef, ViewChild} from '@angular/core';
import {ShoppingListService} from "../shoppingList.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild("amountInput") amountRed: ElementRef;
  @ViewChild("nameInput") ingredientNameRef: ElementRef;


  constructor(private shoppingListService: ShoppingListService) {

  }

  getDetails() {
    const amount = this.amountRed.nativeElement.value;
    const name = this.ingredientNameRef.nativeElement.value;
    this.shoppingListService.addIngredient(name, amount);
  }
}
