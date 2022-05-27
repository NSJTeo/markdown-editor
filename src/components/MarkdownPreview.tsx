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
  padding: 20px;
  font-family: 'Roboto Slab Regular';
  background: ${({ theme }) => theme.bodyBackground};
  h1 {
    font-family: 'Roboto Slab Bold';
    font-weight: 700;
    font-size: 32px;
    line-height: 42px;
    color: ${({ theme }) => theme.bodyHeaderColor};
    margin-bottom: 22px;
  }
  h2 {
    font-family: 'Roboto Slab Light';
    font-weight: 300;
    font-size: 28px;
    line-height: 37px;
    color: ${({ theme }) => theme.bodyHeaderColor};
    margin-bottom: 20px;
  }
  h3 {
    font-family: 'Roboto Slab Bold';
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: ${({ theme }) => theme.bodyHeaderColor};
    margin-bottom: 20px;
  }
  h4 {
    font-family: 'Roboto Slab Bold';
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    color: ${({ theme }) => theme.bodyHeaderColor};
    margin-bottom: 20px;
  }
  h5 {
    font-family: 'Roboto Slab Bold';
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    color: ${({ theme }) => theme.bodyHeaderColor};
    margin-bottom: 20px;
  }
  h6 {
    font-family: 'Roboto Slab Bold';
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
    color: ${({ theme }) => theme.bodyTextColour};
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
    color: ${({ theme }) => theme.bodyTextColour};
    margin-bottom: 20px;
  }
  code {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.bodyCodeColour};
  }
  pre {
    background: ${({ theme }) => theme.blockquoteBackground};
    border-radius: 4px;
    padding: 24px;
  }
  blockquote {
    background: ${({ theme }) => theme.blockquoteBackground};
    border-radius: 4px;
    border-left: 4px solid #e46643;
    padding: 24px;
    padding-left: 26px;
    margin-bottom: 20px;
  }
  blockquote p {
    font-family: 'Roboto Slab Bold';
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.blockquoteText};
    margin-bottom: 0;
  }
  a,
  a:active,
  a:visited {
    color: ${({ theme }) => theme.linkColour};
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
        <Title>PREVIEW</Title>
        <IconButton onClick={() => closePreview()}>
          <Icon src={hidePreviewIcon} alt="hide preview icon" />
        </IconButton>
      </TitleContainer>
      {MyComponent()}
    </FullContainer>
  );
}
