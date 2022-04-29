import { ActionType } from '../action_types';
import { Action } from '../actions';
import { Dispatch } from 'redux';

export const addDocument = (
  id: number,
  createdAt: string,
  name: string,
  content: string
) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_DOCUMENT,
      payload: { id, createdAt, name, content },
    });
    dispatch({
      type: ActionType.SELECT_DOCUMENT,
      payload: id,
    });
  };
};

export const deleteDocument = (id: number) => {
  return { type: ActionType.DELETE_DOCUMENT, payload: id };
};
