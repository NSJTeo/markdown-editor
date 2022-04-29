import { ActionType } from '../action_types';

export const closePreview = () => {
  return {
    type: ActionType.CLOSE_PREVIEW,
  };
};

export const openPreview = () => {
  return {
    type: ActionType.OPEN_PREVIEW,
  };
};
