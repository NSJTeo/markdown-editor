import { ActionType } from '../action_types';

export const selectDocumentId = (id: number) => {
  return {
    type: ActionType.SELECT_DOCUMENT_ID,
    payload: id,
  };
};
