import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {FindPasswordComponent} from './find-password/find-password.component';
import {LoginComponent} from './login/login.component';
import {EditPasswordComponent} from './edit-password/edit-password.component';
import {SignupComponent} from './signup/signup.component';
import {AddCarComponent} from './add-car/add-car.component';
import {MyCarsComponent} from './my-cars/my-cars.component';
import {AuthGuardService} from '../shared/auth-guard.service';

const routes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'find-password', component: FindPasswordComponent},
  {path: 'edit-password', component: EditPasswordComponent},
  {path: 'my-cars', component: MyCarsComponent, canActivate: [AuthGuardService]},
  {path: 'add-cars', component: AddCarComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuardService
  ]
})
export class UserRoutingModule {
}
