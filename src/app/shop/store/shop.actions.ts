import {Action} from '@ngrx/store';
import {ShopListJsonModel} from '../shop-list/shop-list.json.model';
import {ShopDetailJsonModel} from '../shop-detail/shop-detail.json.model';


export enum ShopActionTypes {
  GetShops = '[Shop] Get Shops',
  GetShopsSuccess = '[Shop] Set Shops Success',
  GetShop = '[Shop] Get Shop',
  GetShopSuccess = '[Shop] Get Shop Success',
  ResetStoreId = '[Shop] Reset Store Id',
  ShopError = '[Shop] Error'
}


// 获取店面
export class GetShops implements Action {
  readonly type = ShopActionTypes.GetShops;

}

export class GetShopsSuccess implements Action {
  readonly type = ShopActionTypes.GetShopsSuccess;

  constructor(public payload: ShopListJsonModel) {
  }
}

// 获取门店详情
export class GetShop implements Action {
  readonly type = ShopActionTypes.GetShop;

  constructor(public payload: { storeid: number }) {
  }
}

export class GetShopSuccess implements Action {
  readonly type = ShopActionTypes.GetShopSuccess;

  constructor(public payload: ShopDetailJsonModel) {
  }
}

export class ResetStoreId implements Action {
  readonly type = ShopActionTypes.ResetStoreId;

}

export class ShopError implements Action {
  readonly type = ShopActionTypes.ShopError;

  constructor(public payload: any) {
  }
}

export type ShopActionsUnion = | GetShops | GetShopsSuccess | GetShop | GetShopSuccess | ResetStoreId | ShopError;

// 已完成
