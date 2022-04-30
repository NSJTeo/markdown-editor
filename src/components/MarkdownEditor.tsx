import { useEffect, useState } from 'react';
import styled from 'styled-components';
import showPreviewIcon from '../assets/icons/icon-show-preview.svg';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

interface PreviewProps {
  preview: boolean;
}

interface Document {
  id: number;
  createdAt: string;
  name: string;
  content: string;
}

const FullContainer = styled.div<PreviewProps>`
  display: ${({ preview }) => (preview ? 'none' : 'block')};
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 15.8px;
  height: 42px;
  background-color: #f5f5f5;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 2px;
  color: #7c8187;
`;

const Icon = styled.img`
  width: 1rem;
  height: 11.2px;
`;

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

export const IconButton = styled.button`
  background: none;
  border: none;
`;

export default function MarkdownEditor() {
  const { preview, selectedDocumentId, documents } = useTypedSelector(
    (state) => state
  );
  const { openPreview, editDocument } = useActions();
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(
    null
  );

  useEffect(() => {
    const currentDocument = documents.find((document) => {
      return document.id === selectedDocumentId;
    });
    setSelectedDocument(currentDocument || null);
  }, [documents, selectedDocumentId]);

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    if (!selectedDocumentId) {
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
      <Editor value={selectedDocument?.content || ''} onChange={handleChange} />
    </FullContainer>
  );
}
