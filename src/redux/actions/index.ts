import { ActionType } from '../action_types';

interface TurnDarkModeOn {
  type: ActionType.DARK_MODE_ON;
}

interface TurnDarkModeOff {
  type: ActionType.DARK_MODE_OFF;
}

interface TurnMenuOn {
  type: ActionType.MENU_ON;
}

interface TurnMenuOff {
  type: ActionType.MENU_OFF;
}

interface AddDocument {
  type: ActionType.ADD_DOCUMENT;
  payload: { id: number; createdAt: string; name: string; content: string };
}

interface DeleteDocument {
  type: ActionType.DELETE_DOCUMENT;
  payload: number;
}

export type Action =
  | TurnDarkModeOn
  | TurnDarkModeOff
  | TurnMenuOn
  | TurnMenuOff
  | AddDocument
  | DeleteDocument;
