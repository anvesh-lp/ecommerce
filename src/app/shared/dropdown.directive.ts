import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';
import {Event} from "@angular/router";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding("class.open") isOpen: boolean = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener("click") toggleDev(eventData: Event) {
    this.isOpen = !this.isOpen
  }

}
