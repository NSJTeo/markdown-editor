import styled from 'styled-components';
import { useTypedSelector } from '../hooks/useTypedSelector';
import hidePreviewIcon from '../assets/icons/icon-hide-preview.svg';
import { useActions } from '../hooks/useActions';
import { marked } from 'marked';
import { useEffect, useState } from 'react';
import { TitleContainer, Title, IconButton } from '../styles';

interface PreviewProps {
  preview: boolean;
}

const FullContainer = styled.div<PreviewProps>`
  display: ${({ preview }) => (preview ? 'block' : 'none')};
`;

const Icon = styled.img`
  width: 15.86px;
  height: 14.26px;
`;

const Preview = styled.div`
  padding: 1rem;
  h1 {
    font-weight: 700;
    font-size: 32px;
    line-height: 42px;
    color: #35393f;
    margin-bottom: 22px;
  }
  h2 {
    font-weight: 300;
    font-size: 28px;
    line-height: 37px;
    color: #35393f;
    margin-bottom: 20px;
  }
  h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #35393f;
    margin-bottom: 20px;
  }
  h4 {
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    color: #35393f;
    margin-bottom: 20px;
  }
  h5 {
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    color: #35393f;
    margin-bottom: 20px;
  }
  h6 {
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: #e46643;
    margin-bottom: 21px;
  }
  ol,
  ul {
    margin-bottom: 20px;
  }
  li {
    font-size: 14px;
    line-height: 24px;
    color: #7c8187;
    padding-left: 8.82px;
  }
  ol li {
    margin-left: 44px;
  }
  ul {
    list-style: none; /* Remove default bullets */
  }
  ul li::before {
    content: '•';
    color: #e46643;
    padding-right: 1rem;
    margin-left: 24px;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #7c8187;
    margin-bottom: 20px;
  }
  code {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #35393f;
  }
  pre {
    background: #f5f5f5;
    border-radius: 4px;
    padding: 24px;
  }
  blockquote {
    background: #f5f5f5;
    border-radius: 4px;
    border-left: 4px solid #e46643;
    padding: 24px;
    padding-left: 26px;
    margin-bottom: 20px;
  }
  blockquote p {
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: #35393f;
    margin-bottom: 0;
  }
`;

interface Document {
  id: number;
  createdAt: string;
  name: string;
  content: string;
}

export default function MarkdownPreview() {
  const { preview, selectedDocumentId, documents } = useTypedSelector(
    (state) => state
  );
  const { closePreview } = useActions();
  const [selectedDocument, setSelectedDocument] = useState<null | Document>(
    null
  );
  const markdownText = marked.parse(selectedDocument?.content || '');

  useEffect(() => {
    const currentDocument = documents.find((document) => {
      return document.id === selectedDocumentId;
    });
    if (!currentDocument) {
      return;
    }
    setSelectedDocument(currentDocument);
  }, [documents, selectedDocumentId]);

  function createMarkup() {
    return { __html: markdownText };
  }

  function MyComponent() {
    return <Preview dangerouslySetInnerHTML={createMarkup()} />;
  }

  return (
    <FullContainer preview={preview}>
      <TitleContainer>
        <Title>MARKDOWN</Title>
        <IconButton onClick={() => closePreview()}>
          <Icon src={hidePreviewIcon} alt="hide preview icon" />
        </IconButton>
      </TitleContainer>
      {MyComponent()}
    </FullContainer>
  );
}
