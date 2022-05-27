import { useEffect, useRef, useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Document } from '../types';
import hidePreviewIcon from '../assets/icons/icon-hide-preview.svg';
import showPreviewIcon from '../assets/icons/icon-show-preview.svg';
import { useActions } from '../hooks/useActions';
import { marked } from 'marked';
import {
  MarkdownEditorContainer as EditorContainer,
  MarkdownPreviewContainer as PreviewContainer,
  MarkdownHeaderTitle as HeaderTitle,
  MarkdownHeaderContainer as HeaderContainer,
  MarkdownPreviewButton as PreviewButton,
  MarkdownPreviewIcon as PreviewIcon,
  MarkdownHidePreviewIcon as HidePreviewIcon,
  MarkdownPreview as Preview,
  MarkdownEditor as Editor,
} from '../styles';

export default function Markdown() {
  const { documents, selectedDocumentId, preview } = useTypedSelector(
    (state) => state
  );
  const { editDocument, openPreview, closePreview } = useActions();
  const [selectedDocument, setSelectedDocument] = useState<null | Document>(
    null
  );
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const currentDocument = documents.find((document) => {
      return document.id === selectedDocumentId;
    });
    if (!currentDocument) {
      return;
    }
    setSelectedDocument(currentDocument);
  }, [documents, selectedDocumentId]);

  useEffect(() => {
    if (!textAreaRef.current) return;
    textAreaRef.current.style.height = 'calc(100vh - 110px)';
    textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
  }, [
    textAreaRef.current?.scrollHeight,
    selectedDocumentId,
    preview,
    documents,
  ]);

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    if (selectedDocumentId === null) {
      return;
    }
    editDocument(selectedDocumentId, e.target.value);
  };

  const markdownText = marked.parse(selectedDocument?.content || '');
  const createMarkup = { __html: markdownText };

  return (
    <main>
      <EditorContainer preview={preview}>
        <HeaderContainer>
          <HeaderTitle>MARKDOWN</HeaderTitle>
          <PreviewButton onClick={() => openPreview()}>
            <PreviewIcon src={showPreviewIcon} alt="" />
          </PreviewButton>
        </HeaderContainer>
        <Editor
          value={selectedDocument?.content || ''}
          ref={textAreaRef}
          onChange={handleChange}
        />
      </EditorContainer>
      <PreviewContainer preview={preview}>
        <HeaderContainer>
          <HeaderTitle>PREVIEW</HeaderTitle>
          <PreviewButton onClick={() => closePreview()}>
            <HidePreviewIcon src={hidePreviewIcon} alt="" />
          </PreviewButton>
        </HeaderContainer>
        <Preview dangerouslySetInnerHTML={createMarkup} />
      </PreviewContainer>
    </main>
  );
}
