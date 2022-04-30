import styled from 'styled-components';
import { useEffect } from 'react';
import Header from './components/Header';
import MarkdownEditor from './components/MarkdownEditor';
import MarkdownPreview from './components/MarkdownPreview';
import Menu from './components/Menu';
import { useTypedSelector } from './hooks/useTypedSelector';
import { useActions } from './hooks/useActions';
import documents from './assets/json/documents.json';

const HeaderMainContainer = styled.div`
  width: 100%;
`;

const AppContainer = styled.div`
  display: flex;
`;

function App() {
  const { menu } = useTypedSelector((state) => state);
  const { addDocuments } = useActions();

  useEffect(() => {
    addDocuments(documents);
  }, []);

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
