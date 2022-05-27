import styled from 'styled-components';

type MarkdownPreviewContainerProps = {
  preview: boolean;
};

export const MarkdownPreviewContainer = styled.div<MarkdownPreviewContainerProps>`
  display: ${({ preview }) => (preview ? '' : 'none')};
`;
