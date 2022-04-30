import styled from 'styled-components';
import Header from './components/Header';
import MarkdownEditor from './components/MarkdownEditor';
import MarkdownPreview from './components/MarkdownPreview';
import Menu from './components/Menu';
import { useTypedSelector } from './hooks/useTypedSelector';

const HeaderMainContainer = styled.div`
  width: 100%;
`;

const AppContainer = styled.div`
  display: flex;
`;

function App() {
  const { menu } = useTypedSelector((state) => state);
  return (
    <AppContainer>
      {menu && <Menu />}
      <HeaderMainContainer>
        <Header />
        <main>
          <MarkdownEditor />
          <MarkdownPreview />
        </main>
      </HeaderMainContainer>
    </AppContainer>
  );
}

export default App;
