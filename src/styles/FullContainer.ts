import styled from 'styled-components';

type PreviewProps = {
  preview: boolean;
};

export const FullContainer = styled.div<PreviewProps>`
  display: ${({ preview }) => (preview ? 'none' : 'block')};
`;
