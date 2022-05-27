import styled from 'styled-components';
import { useEffect } from 'react';
import Header from './components/Header';
import MarkdownEditor from './components/MarkdownEditor';
import MarkdownPreview from './components/MarkdownPreview';
import Menu from './components/Menu';
import { useTypedSelector } from './hooks/useTypedSelector';
import { useActions } from './hooks/useActions';
import defaultDocuments from './assets/json/documents.json';
import DeleteModal from './components/DeleteModal';

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

const HeaderMask = styled.div`
  position: absolute;
  background: #35393f;
  width: 100vw;
  height: 56px; ;
`;

function App() {
  const { menu, deleteModal, selectedDocumentId } = useTypedSelector(
    (state) => state
  );
  const { addDocuments } = useActions();

  useEffect(() => {
    addDocuments(defaultDocuments);
  }, []);

  return (
    <AppContainer>
      {deleteModal && <DeleteModal />}
      <HeaderMask />
      <Menu />
      <HeaderMainContainer menu={menu}>
        <Header />
        {selectedDocumentId && (
          <main>
            <MarkdownEditor />
            <MarkdownPreview />
          </main>
        )}
      </HeaderMainContainer>
    </AppContainer>
  );
}

export default App;
