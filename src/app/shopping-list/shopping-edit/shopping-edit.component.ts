import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild("amountInput") amountRed: ElementRef;
  @ViewChild("nameInput") ingredientNameRef: ElementRef;
  @Output() newIngredient = new EventEmitter<Ingredient>();

  getDetails() {
    const amount = this.amountRed.nativeElement.value;
    const name = this.ingredientNameRef.nativeElement.value;
    this.newIngredient.emit(new Ingredient(amount, name))
  }
}
