import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  templateUrl: 'header.component.html',
  selector: 'app-header',
})
export class HeaderComponent {

  @Output() currentWindowClicked = new EventEmitter<String>();

  // currentWindow:string="recipe"

  onRecipeClicked() {
    this.currentWindowClicked.emit("recipe");
  }

  onShoppingClicked() {
    this.currentWindowClicked.emit("shopping");
  }


}
