import {Action} from '@ngrx/store';

export enum LayoutActionTypes {
  Open = '[Layout] Open',
  Close = '[Layout] Close'
}

export class Open implements Action {
  readonly type = LayoutActionTypes.Open;
}

export class Close implements Action {
  readonly type = LayoutActionTypes.Close;
}

export type LayoutActionsUnion = Open | Close;
