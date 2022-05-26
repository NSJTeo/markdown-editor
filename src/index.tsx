import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { GlobalStyles } from './styles';
import { store } from './redux';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </>
);
