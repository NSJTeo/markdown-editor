import styled, { ThemeProvider } from 'styled-components';
import { useEffect } from 'react';
import { useActions } from './hooks/useActions';
import { useTypedSelector } from './hooks/useTypedSelector';
import Header from './components/Header';
import Menu from './components/Menu';
import defaultDocuments from './assets/json/documents.json';
import DeleteModal from './components/DeleteModal';
import { lightMode, darkMode } from './themes';
import { GlobalStyles } from './styles';
import Markdown from './components/Markdown';

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
  const {
    menu,
    deleteModal,
    darkMode: darkModeOn,
  } = useTypedSelector((state) => state);
  const { addDocuments } = useActions();

  useEffect(() => {
    addDocuments(defaultDocuments);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const theme = darkModeOn ? darkMode : lightMode;

  return (
    <>
      <GlobalStyles darkMode={darkModeOn} />
      <AppContainer>
        <ThemeProvider theme={theme}>
          {deleteModal && <DeleteModal />}
          <HeaderMask />
          <Menu />
          <HeaderMainContainer menu={menu}>
            <Header />
            <Markdown />
          </HeaderMainContainer>
        </ThemeProvider>
      </AppContainer>
    </>
  );
}

export default App;
