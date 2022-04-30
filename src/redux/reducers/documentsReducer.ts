import { Action } from '../actions';
import { ActionType } from '../action_types';

interface document {
  id: number;
  createdAt: string;
  name: string;
  content: string;
}

const documentsReducer = (state: document[] = [], action: Action) => {
  switch (action.type) {
    case ActionType.ADD_DOCUMENTS:
      return [...action.payload];
    case ActionType.ADD_DOCUMENT:
      return [...state, action.payload];
    case ActionType.DELETE_DOCUMENT:
      return state.filter((document) => document.id !== action.payload);
    case ActionType.UPDATE_DOCUMENT_TITLE:
      const documents = [...state];
      const editedTitleDocument = documents.find((document) => {
        return document.id === action.payload.id;
      });
      if (!editedTitleDocument) {
        return state;
      }
      editedTitleDocument.name = action.payload.newTitle;
      return documents;
    default:
      return state;
  }
};

export default documentsReducer;
