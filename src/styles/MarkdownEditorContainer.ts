import styled from 'styled-components';

type MarkdownEditorContainerProps = {
  preview: boolean;
};

export const MarkdownEditorContainer = styled.div<MarkdownEditorContainerProps>`
  display: ${({ preview }) => (preview ? 'none' : '')};
`;
