import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRoutingModule} from './user-routing.module';
import {AddCarComponent} from './add-car/add-car.component';
import {EditPasswordComponent} from './edit-password/edit-password.component';
import {FindPasswordComponent} from './find-password/find-password.component';
import {LoginComponent} from './login/login.component';
import {MyCarsComponent} from './my-cars/my-cars.component';
import {SignupComponent} from './signup/signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule
  ],
  declarations: [
    AddCarComponent,
    EditPasswordComponent,
    FindPasswordComponent,
    LoginComponent,
    MyCarsComponent,
    SignupComponent
  ]
})
export class UserModule { }
