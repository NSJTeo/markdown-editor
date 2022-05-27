import { ActionType } from '../action_types';
import { Action } from '../actions';
import { Dispatch } from 'redux';
import { getMonth } from '../../utils';

export const addDocument = (id: number) => {
  return (dispatch: Dispatch<Action>) => {
    const currentDate = new Date();
    const date = currentDate.getDate();
    const month = getMonth(currentDate.getMonth());
    const year = currentDate.getFullYear();
    dispatch({
      type: ActionType.ADD_DOCUMENT,
      payload: {
        id,
        createdAt: `${date} ${month} ${year}`,
        name: 'untitled.md',
        content: '',
      },
    });
    dispatch({
      type: ActionType.SELECT_DOCUMENT_ID,
      payload: id,
    });
  };
};

export const editDocument = (id: number, content: string) => {
  return { type: ActionType.EDIT_DOCUMENT, payload: { id, content } };
};

export const deleteDocument = (id: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DELETE_DOCUMENT,
      payload: id,
    });
    dispatch({
      type: ActionType.DELETE_MODAL_OFF,
    });
    // dispatch({
    //   type: ActionType.SELECT_DOCUMENT_ID,
    //   payload: null,
    // });
  };
};

export const updateDocumentTitle = (id: number, newTitle: string) => {
  return { type: ActionType.UPDATE_DOCUMENT_TITLE, payload: { id, newTitle } };
};

interface Document {
  id: number;
  createdAt: string;
  name: string;
  content: string;
}

export const addDocuments = (documents: Document[]) => {
  return { type: ActionType.ADD_DOCUMENTS, payload: documents };
};
