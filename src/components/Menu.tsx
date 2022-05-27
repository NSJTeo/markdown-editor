import styled from 'styled-components';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import SelectDocumentButton from './SelectDocumentButton';
import ModeSelector from './ModeSelector';

type MenuContainerProps = {
  menu: boolean;
};

const MenuContainer = styled.div<MenuContainerProps>`
  position: fixed;
  height: 100vh;
  min-width: 250px;
  background: #1d1f22;
  padding: 24px;
  padding-top: 27px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: translateX(-250px);
  ${({ menu }) => (menu ? 'transform: translateX(0px);' : '')}
  transition: transform 0.5s;
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
  font-family: 'Roboto Medium';
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
  font-family: 'Roboto Regular';
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  padding: 11px;
  margin-bottom: 24px;
  cursor: pointer;
`;

function Menu() {
  const { documents, menu } = useTypedSelector((state) => state);
  const { addDocument } = useActions();
  const DocumentElements = documents.map((document) => {
    return <SelectDocumentButton key={document.id} document={document} />;
  });
  return (
    <MenuContainer menu={menu}>
      <div>
        <Title>MARKDOWN</Title>
        <SubTitle>MY DOCUMENTS</SubTitle>
        <NewDocumentButton
          onClick={() => {
            addDocument(documents.length + 1);
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
