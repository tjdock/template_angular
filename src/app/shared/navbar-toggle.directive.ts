import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appNavbarToggle]'
})
export class NavbarToggleDirective {

  constructor(private ref: ElementRef) {
  }

  @HostListener('click') toggleOpen() {

    const classes = this.ref.nativeElement.parentNode.querySelector('.collapse.navbar-collapse').classList;
    if (classes.contains('show')) {
      classes.remove('show');
    } else {
      classes.add('show');
    }
  }

}
