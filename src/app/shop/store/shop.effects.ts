import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';
import {ShopListJsonModel} from '../shop-list/shop-list.json.model';
import {mergeMap, map, catchError, switchMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {ShopDetailJsonModel} from '../shop-detail/shop-detail.json.model';
import * as Utils from '../../shared/utils';
import {GetShop, GetShops, GetShopsSuccess, GetShopSuccess, ShopActionTypes, ShopError} from './shop.actions';

@Injectable()
export class ShopEffects {


  @Effect()
  getShops$: Observable<Action> = this.actions$.pipe(
    ofType<GetShops>(ShopActionTypes.GetShops),
    switchMap(() =>
      this.httpClient.get(Utils.DOMAIN + 'store/storeList.action')
        .pipe(
          map((data: ShopListJsonModel) => {
              return new GetShopsSuccess(data);
            }
          ),
          catchError(error => of(new ShopError(error)))
        )
    )
  );

  @Effect()
  getShop$: Observable<Action> = this.actions$.pipe(
    ofType<GetShop>(ShopActionTypes.GetShop),
    mergeMap(action =>
      this.httpClient.post(Utils.DOMAIN + 'store/storeinfo.action',
        Utils.handleBody(action.payload),
        Utils.handleHeaders())
        .pipe(
          map((data: ShopDetailJsonModel) => {
              return new GetShopSuccess(data);
            }
          ),
          catchError(error => of(new ShopError(error)))
        )
    )
  );

  constructor(private actions$: Actions, private httpClient: HttpClient) {
  }
}
