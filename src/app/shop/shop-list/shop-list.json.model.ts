import {ShopListModel} from './shop-list.model';

export interface ShopListJsonModel {
  success: number;
  stores: Array<ShopListModel>;
  imgsite: string;
  errorCode: number;
  errorMsg: string;
}
