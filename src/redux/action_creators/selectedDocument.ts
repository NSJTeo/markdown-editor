import { ActionType } from '../action_types';

export const selectDocument = (id: number) => {
  return {
    type: ActionType.SELECT_DOCUMENT,
    payload: id,
  };
};
