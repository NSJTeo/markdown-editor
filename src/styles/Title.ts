import styled from 'styled-components';

export const Title = styled.h2`
  font-family: 'Roboto Medium';
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.viewSelectHeader};
`;
