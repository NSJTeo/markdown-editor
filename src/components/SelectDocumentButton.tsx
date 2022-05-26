import styled from 'styled-components';
import { useActions } from '../hooks/useActions';
import documentIcon from '../assets/icons/icon-document.svg';

const DocumentSelector = styled.button`
  background: none;
  display: flex;
  border: none;
  align-items: center;
  margin-bottom: 26px;
  cursor: pointer;
`;

const Icon = styled.img``;

const Info = styled.div`
  padding-left: 1rem;
`;

const Date = styled.p`
  font-family: 'Roboto Light';
  font-weight: 300;
  font-size: 13px;
  line-height: 15px;
  color: #7c8187;
  text-align: start;
  margin-bottom: 3px;
`;

const Title = styled.p`
  font-family: 'Roboto Regular';
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
  text-align: start;
`;

interface DocumentType {
  id: number;
  name: string;
  createdAt: string;
  content: string;
}

type Props = {
  document: DocumentType;
};

function SelectDocumentButton({ document }: Props) {
  const { selectDocumentId } = useActions();

  return (
    <DocumentSelector onClick={() => selectDocumentId(document.id)}>
      <Icon src={documentIcon} />
      <Info>
        <Date>{document.createdAt}</Date>
        <Title>{document.name}</Title>
      </Info>
    </DocumentSelector>
  );
}

export default SelectDocumentButton;
