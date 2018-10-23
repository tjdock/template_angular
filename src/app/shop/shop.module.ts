import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShopRoutingModule} from './shop-routing.module';
import {ShopStartComponent} from './shop-start/shop-start.component';
import {ShopDetailComponent} from './shop-detail/shop-detail.component';
import {ShopListComponent} from './shop-list/shop-list.component';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store';
import {EffectsModule} from '@ngrx/effects';
import {ShopEffects} from './store/shop.effects';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ShopRoutingModule,
    HttpClientModule,
    StoreModule.forFeature('shops', reducers),
    EffectsModule.forFeature([ShopEffects])
  ],
  declarations: [
    ShopStartComponent,
    ShopListComponent,
    ShopDetailComponent,
  ]
})
export class ShopModule {
}
