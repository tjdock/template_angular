import {LayoutActionsUnion, LayoutActionTypes} from './layout.actions';

export interface State {
  show: boolean;
}

const initialState: State = {
  show: true
};

export function reducer(state: State = initialState, action: LayoutActionsUnion): State {
  switch (action.type) {
    case LayoutActionTypes.Close:
      return {
        show: false
      };
    case LayoutActionTypes.Open:
      return {
        show: true
      };
    default:
      return state;
  }
}


export const getShow = (state: State) => state.show;
