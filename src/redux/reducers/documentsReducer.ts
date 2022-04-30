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
    case ActionType.EDIT_DOCUMENT: {
      let documents = [...state];
      let editedDocument = documents.find((document) => {
        return document.id === action.payload.id;
      });
      if (!editedDocument) {
        return state;
      }
      editedDocument.content = action.payload.content;
      return documents;
    }
    case ActionType.UPDATE_DOCUMENT_TITLE: {
      let documents = [...state];
      let editedDocument = documents.find((document) => {
        return document.id === action.payload.id;
      });
      if (!editedDocument) {
        return state;
      }
      editedDocument.name = action.payload.newTitle;
      return documents;
    }
    default:
      return state;
  }
};

export default documentsReducer;
