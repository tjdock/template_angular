import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {AppRoutingModule} from '../app-routing.module';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    SharedModule,
    AppRoutingModule,
  ],
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  exports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    HeaderComponent
  ]
})
export class CoreModule {
}
