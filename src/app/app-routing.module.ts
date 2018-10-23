import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './core/home/home.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'shop', loadChildren: './shop/shop.module#ShopModule'},
  {path: 'user', loadChildren: './user/user.module#UserModule'},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules, useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
