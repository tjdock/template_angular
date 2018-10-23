import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import * as fromShop from '../store';
import {select, Store} from '@ngrx/store';
import * as ShopActions from '../store/shop.actions';
import {ShopListModel} from './shop-list.model';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss'],
})
export class ShopListComponent implements OnInit {

  stores$: Observable<Array<ShopListModel>>;
  imgsite$: Observable<string>;
  storeid$: Observable<number>;

  constructor(private router: Router,
              private store: Store<fromShop.State>) {
    this.stores$ = store.pipe(select(fromShop.getters.stores));
    this.imgsite$ = store.pipe(select(fromShop.getters.imgsite));
    this.storeid$ = store.pipe(select(fromShop.getters.storeid));
  }

  ngOnInit() {
    this.store.dispatch(new ShopActions.GetShops());
  }


}
