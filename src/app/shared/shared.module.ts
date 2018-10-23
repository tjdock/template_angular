import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropDownDirective} from './drop-down.directive';
import {NavbarToggleDirective} from './navbar-toggle.directive';

@NgModule({
  declarations: [
    DropDownDirective,
    NavbarToggleDirective
  ],
  exports: [
    CommonModule,
    DropDownDirective,
    NavbarToggleDirective
  ]
})
export class SharedModule {
}
