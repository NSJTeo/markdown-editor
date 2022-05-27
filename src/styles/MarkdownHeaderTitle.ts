import styled from 'styled-components';

export const MarkdownHeaderTitle = styled.h3`
  font-family: 'Roboto Medium';
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.viewSelectHeader};
`;
