import {ShopDetailModel} from './shop-detail.model';

export interface ShopDetailJsonModel {
  success: number;
  store: ShopDetailModel;
  errorCode: number;
  errorMsg: string;
  imgsite: string;
}
