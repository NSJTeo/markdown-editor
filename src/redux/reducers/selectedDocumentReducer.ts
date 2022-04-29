import { Action } from '../actions';
import { ActionType } from '../action_types';

const selectedDocumentReducer = (
  state: null | number = null,
  action: Action
) => {
  switch (action.type) {
    case ActionType.SELECT_DOCUMENT:
      return action.payload;
    default:
      return state;
  }
};

export default selectedDocumentReducer;
