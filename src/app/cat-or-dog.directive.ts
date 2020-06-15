import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCatOrDog]'
})
export class CatOrDogDirective {

  constructor() { }

  @HostBinding('style.background-color') public backgroundColor = 'none'

  @HostListener('mouseenter') public mouseEnter() {
    this.backgroundColor = 'green';
  }

  @HostListener('mouseleave') public mouseLeave() {
    this.backgroundColor = 'transparent';
  }

}
