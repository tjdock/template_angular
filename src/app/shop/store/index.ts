import * as fromShops from './shop.reducers';
import * as fromRoot from '../../app.reducers';
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';

export interface ShopsState {
  shops: fromShops.State;
}

export interface State extends fromRoot.State {
  shops: ShopsState;
}

export const reducers: ActionReducerMap<ShopsState> = {
  shops: fromShops.reducer
};


export const getShopsState = createFeatureSelector<ShopsState>('shops');

export const getShopsEntitiesState = createSelector(
  getShopsState,
  (state: ShopsState) => state.shops
);


// export const getStores = createSelector(
//   getShopsEntitiesState,
//   fromShops.getStores
// );
// export const getImgsite = createSelector(
//   getShopsEntitiesState,
//   fromShops.getImgsite
// );
// export const getStoreid = createSelector(
//   getShopsEntitiesState,
//   fromShops.getStoreid
// );
// export const getStore = createSelector(
//   getShopsEntitiesState,
//   fromShops.getStore
// );


export const getters = {
  stores: createSelector(getShopsEntitiesState, fromShops.getStores),
  imgsite: createSelector(getShopsEntitiesState, fromShops.getImgsite),
  storeid: createSelector(getShopsEntitiesState, fromShops.getStoreid),
  store: createSelector(getShopsEntitiesState, fromShops.getStore),
};
