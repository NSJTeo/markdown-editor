import { Action } from '../actions';
import { ActionType } from '../action_types';

const deleteModalReducer = (state = false, action: Action) => {
  switch (action.type) {
    case ActionType.DELETE_MODAL_OFF:
      return false;
    case ActionType.DELETE_MODAL_ON:
      return true;
    default:
      return state;
  }
};

export default deleteModalReducer;
