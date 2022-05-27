import styled from 'styled-components';

export const DeleteModalHeader = styled.h3`
  font-family: 'Roboto Slab Bold';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  color: ${({ theme }) => theme.deleteModalHeader};
  margin-bottom: 1rem;
`;
