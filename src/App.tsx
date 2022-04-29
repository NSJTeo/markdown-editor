import Header from './components/Header';
import MarkdownEditor from './components/MarkdownEditor';
import MarkdownPreview from './components/MarkdownPreview';

function App() {
  return (
    <>
      <Header />
      <main>
        <MarkdownEditor />
        <MarkdownPreview />
      </main>
    </>
  );
}

export default App;
