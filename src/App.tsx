import styled from 'styled-components';
import { useEffect } from 'react';
import Header from './components/Header';
import MarkdownEditor from './components/MarkdownEditor';
import MarkdownPreview from './components/MarkdownPreview';
import Menu from './components/Menu';
import { useTypedSelector } from './hooks/useTypedSelector';
import { useActions } from './hooks/useActions';
import documents from './assets/json/documents.json';

type HeaderMainContainerProps = {
  menu: boolean;
};

const HeaderMainContainer = styled.div<HeaderMainContainerProps>`
  position: absolute;
  right: 0;
  left: 0;
  ${({ menu }) => (menu ? 'left: 250px;' : '')}
  transition: left 0.5s;
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
      <Menu />
      <HeaderMainContainer menu={menu}>
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
