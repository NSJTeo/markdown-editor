import styled from 'styled-components';

export const DeleteModalText = styled.p`
  font-family: 'Roboto Slab Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.deleteModalText};
  margin-bottom: 1rem;
`;
