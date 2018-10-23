import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {

  constructor(private ref: ElementRef) {
  }

  @HostListener('focus') focus() {
    const classes = this.ref.nativeElement.parentNode.querySelector('.dropdown-menu').classList;
    classes.add('show');
  }

  @HostListener('focusout') focusout() {
    setTimeout(() => {
      const classes = this.ref.nativeElement.parentNode.querySelector('.dropdown-menu').classList;
      classes.remove('show');
    }, 500);
  }

  // @HostListener('click') click() {
  //   const classes = this.ref.nativeElement.parentNode.querySelector('.dropdown-menu').classList;
  //   if (classes.contains('show')) {
  //     classes.remove('show');
  //   } else {
  //     classes.add('show');
  //   }
  // }


}
