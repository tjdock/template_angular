import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShopStartComponent} from './shop-start/shop-start.component';
import {ShopDetailComponent} from './shop-detail/shop-detail.component';
import {ShopListComponent} from './shop-list/shop-list.component';

const routes: Routes = [
  {
    path: '', component: ShopListComponent, children: [
      {path: '', component: ShopStartComponent},
      {path: ':id', component: ShopDetailComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ShopRoutingModule {
}
