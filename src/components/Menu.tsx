import styled from 'styled-components';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Document from './Document';
import ModeSelector from './ModeSelector';

const MenuContainer = styled.div`
  /* position: fixed; */
  height: 100vh;
  min-width: 250px;
  background: #1d1f22;
  padding: 24px;
  padding-top: 27px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 5px;
  color: #ffffff;
  margin-bottom: 27px;
`;

const SubTitle = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 2px;
  color: #7c8187;
  margin-bottom: 29px;
`;

const NewDocumentButton = styled.button`
  background: #e46643;
  border-radius: 4px;
  color: white;
  border: none;
  width: 100%;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  padding: 11px;
  margin-bottom: 24px;
`;

function Menu() {
  const { documents } = useTypedSelector((state) => state);
  const { addDocument } = useActions();
  const DocumentElements = documents.map((document) => {
    return <Document key={document.id} document={document} />;
  });
  return (
    <MenuContainer>
      <div>
        <Title>MARKDOWN</Title>
        <SubTitle>MY DOCUMENTS</SubTitle>
        <NewDocumentButton
          onClick={() => {
            addDocument(documents.length);
          }}
        >
          + New Document
        </NewDocumentButton>
        {DocumentElements}
      </div>
      <ModeSelector />
    </MenuContainer>
  );
}

export default Menu;
