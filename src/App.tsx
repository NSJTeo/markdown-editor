import styled from 'styled-components';
import Header from './components/Header';
import MarkdownEditor from './components/MarkdownEditor';
import MarkdownPreview from './components/MarkdownPreview';
import Menu from './components/Menu';

const HeaderMainContainer = styled.div``;

function App() {
  return (
    <>
      <Menu />
      <HeaderMainContainer>
        <Header />
        <main>
          <MarkdownEditor />
          <MarkdownPreview />
        </main>
      </HeaderMainContainer>
    </>
  );
}

export default App;
