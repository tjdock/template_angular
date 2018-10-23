import {Component, OnInit} from '@angular/core';
import * as ShopActions from '../store/shop.actions';
import {Store} from '@ngrx/store';
import * as fromShop from '../store';

@Component({
  selector: 'app-shop-start',
  templateUrl: './shop-start.component.html',
  styleUrls: ['./shop-start.component.css']
})
export class ShopStartComponent implements OnInit {

  constructor(private store: Store<fromShop.State>) {
  }

  ngOnInit() {
    this.store.dispatch(new ShopActions.ResetStoreId());
  }

}
