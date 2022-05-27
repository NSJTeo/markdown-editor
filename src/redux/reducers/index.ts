import { combineReducers } from 'redux';
import darkModeReducer from './darkModeReducer';
import documentsReducer from './documentsReducer';
import menuReducer from './menuReducer';
import previewReducer from './previewReducer';
import selectedDocumentIdReducer from './selectedDocumentIdReducer';
import deleteModalReducer from './deleteModalReducer';

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  menu: menuReducer,
  documents: documentsReducer,
  preview: previewReducer,
  selectedDocumentId: selectedDocumentIdReducer,
  deleteModal: deleteModalReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
