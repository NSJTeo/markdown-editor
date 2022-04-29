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

interface OpenPreview {
  type: ActionType.OPEN_PREVIEW;
}

interface ClosePreview {
  type: ActionType.CLOSE_PREVIEW;
}

interface SelectDocumentId {
  type: ActionType.SELECT_DOCUMENT_ID;
  payload: number;
}

interface UpdateDocumentTitle {
  type: ActionType.UPDATE_DOCUMENT_TITLE;
  payload: { id: number; newTitle: string };
}

export type Action =
  | TurnDarkModeOn
  | TurnDarkModeOff
  | TurnMenuOn
  | TurnMenuOff
  | AddDocument
  | DeleteDocument
  | OpenPreview
  | ClosePreview
  | SelectDocumentId
  | UpdateDocumentTitle;
