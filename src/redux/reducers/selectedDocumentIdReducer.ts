import { Action } from '../actions';
import { ActionType } from '../action_types';

const selectedDocumentIdReducer = (
  state: null | number = null,
  action: Action
) => {
  switch (action.type) {
    case ActionType.SELECT_DOCUMENT_ID:
      return action.payload;
    default:
      return state;
  }
};

export default selectedDocumentIdReducer;
