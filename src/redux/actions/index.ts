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

interface Document {
  id: number;
  createdAt: string;
  name: string;
  content: string;
}

interface AddDocument {
  type: ActionType.ADD_DOCUMENT;
  payload: Document;
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

interface AddDocuments {
  type: ActionType.ADD_DOCUMENTS;
  payload: Document[];
}

interface EditDocument {
  type: ActionType.EDIT_DOCUMENT;
  payload: { id: number; content: string };
}

interface TurnModalOn {
  type: ActionType.DELETE_MODAL_ON;
}

interface TurnModalOff {
  type: ActionType.DELETE_MODAL_OFF;
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
  | UpdateDocumentTitle
  | AddDocuments
  | EditDocument
  | TurnModalOff
  | TurnModalOn;
