import styled from 'styled-components';

export const MarkdownHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 15.8px;
  height: 42px;
  background-color: ${({ theme }) => theme.viewSelectBackground};
  min-width: 375px;
`;
