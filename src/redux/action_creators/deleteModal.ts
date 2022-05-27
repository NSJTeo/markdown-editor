import { ActionType } from '../action_types';

export const deleteModalOn = () => {
  return {
    type: ActionType.DELETE_MODAL_ON,
  };
};

export const deleteModalOff = () => {
  return {
    type: ActionType.DELETE_MODAL_OFF,
  };
};
