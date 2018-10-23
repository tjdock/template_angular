import {ShopListModel} from '../shop-list/shop-list.model';
import {ShopDetailModel} from '../shop-detail/shop-detail.model';
import {ShopActionsUnion, ShopActionTypes} from './shop.actions';


export interface State {
  stores: Array<ShopListModel>;
  imgsite: string;
  store: ShopDetailModel;
  storeid: { storeid: number };
}

const initialState: State = {
  stores: null,
  imgsite: null,
  store: null,
  storeid: {storeid: -1}
};

export function reducer(state = initialState, action: ShopActionsUnion): State {
  switch (action.type) {
    case ShopActionTypes.GetShops: {
      return {
        ...state
      };
    }
    case ShopActionTypes.GetShopsSuccess: {
      return {
        ...state,
        stores: action.payload.stores,
        imgsite: action.payload.imgsite
      };
    }
    case ShopActionTypes.GetShop: {
      return {
        ...state,
        storeid: action.payload
      };
    }
    case ShopActionTypes.GetShopSuccess: {
      return {
        ...state,
        store: action.payload.store,
        imgsite: action.payload.imgsite
      };
    }
    case ShopActionTypes.ResetStoreId: {
      return {
        ...state,
        storeid: {storeid: -1}
      };
    }
    default: {
      return state;
    }
  }
}


export const getStores = (state: State) => state.stores;
export const getImgsite = (state: State) => state.imgsite;
export const getStore = (state: State) => state.store;
export const getStoreid = (state: State) => state.storeid.storeid;

// 已完成
