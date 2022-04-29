import { ActionType } from '../action_types';

export const addDocument = (
  id: number,
  createdAt: string,
  name: string,
  content: string
) => {
  return {
    type: ActionType.ADD_DOCUMENT,
    payload: { id, createdAt, name, content },
  };
};

export const deleteDocument = (id: number) => {
  return {
    type: ActionType.DELETE_DOCUMENT,
    payload: id,
  };
};
