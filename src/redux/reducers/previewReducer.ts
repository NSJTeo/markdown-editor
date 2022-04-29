import { Action } from '../actions';
import { ActionType } from '../action_types';

const previewReducer = (state = false, action: Action) => {
  switch (action.type) {
    case ActionType.OPEN_PREVIEW:
      return true;
    case ActionType.CLOSE_PREVIEW:
      return false;
    default:
      return state;
  }
};

export default previewReducer;
