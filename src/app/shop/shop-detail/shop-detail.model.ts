export interface ShopDetailModel {
  address: string;
  phone: string;
  storename: string;
  latitude: string;
  longitude: string;
  description: string;
  imgs: Array<{ imgurl: string }>;
  id: number;
  gauss_x: number;
  gauss_y: number;
}
