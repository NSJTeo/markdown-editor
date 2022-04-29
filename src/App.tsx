import { Provider } from 'react-redux';
import { store } from './redux';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <Header />
    </Provider>
  );
}

export default App;
