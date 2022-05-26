import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import showPreviewIcon from '../assets/icons/icon-show-preview.svg';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import {
  FullContainer,
  TitleContainer,
  Title,
  Icon,
  IconButton,
} from '../styles';

interface Document {
  id: number;
  createdAt: string;
  name: string;
  content: string;
}

const Editor = styled.textarea`
  resize: none;
  border: none;
  width: 100%;
  padding: 1rem;
  padding-bottom: 12px;
  /* text */
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #35393f;
  &:focus {
    outline: none;
  }
`;

export default function MarkdownEditor() {
  const { preview, selectedDocumentId, documents } = useTypedSelector(
    (state) => state
  );
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(
    null
  );
  const { openPreview, editDocument } = useActions();
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!textAreaRef.current) return;
    console.log(textAreaRef.current.innerText);
    textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    console.log(textAreaRef.current?.scrollHeight);
  }, [textAreaRef.current?.scrollHeight, selectedDocumentId]);

  useEffect(() => {
    const currentDocument = documents.find((document) => {
      return document.id === selectedDocumentId;
    });
    setSelectedDocument(currentDocument || null);
  }, [documents, selectedDocumentId]);

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    if (selectedDocumentId === null) {
      return;
    }
    editDocument(selectedDocumentId, e.target.value);
  };

  return (
    <FullContainer preview={preview}>
      <TitleContainer>
        <Title>MARKDOWN</Title>
        <IconButton onClick={() => openPreview()}>
          <Icon src={showPreviewIcon} alt="hide preview icon" />
        </IconButton>
      </TitleContainer>
      <Editor
        value={selectedDocument?.content || ''}
        onChange={handleChange}
        ref={textAreaRef}
      />
    </FullContainer>
  );
}
