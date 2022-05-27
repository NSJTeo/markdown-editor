import styled from 'styled-components';

export const MarkdownEditor = styled.textarea`
  overflow-y: hidden;
  resize: none;
  border: none;
  width: 100%;
  padding: 1rem;
  padding-bottom: 12px;
  font-family: 'Roboto Mono Regular';
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.markdownTextColour};
  background: ${({ theme }) => theme.bodyBackground};
  &:focus {
    outline: none;
  }
`;
