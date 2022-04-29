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
    case ActionType.ADD_DOCUMENT:
      return [...state, action.payload];
    case ActionType.DELETE_DOCUMENT:
      return state.filter((document) => document.id !== action.payload);
    default:
      return state;
  }
};

export default documentsReducer;
