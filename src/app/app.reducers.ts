import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromLayout from './core/store/layout.reducer';

export interface State {
  layout: fromLayout.State
}

export const reducers: ActionReducerMap<State> = {
  layout: fromLayout.reducer
};


const getLayoutState = createFeatureSelector<fromLayout.State>('layout');

export const getShow = createSelector(
  getLayoutState,
  fromLayout.getShow
);


