import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useTypedSelector } from '../hooks/useTypedSelector';
import closeMenuIcon from '../assets/icons/icon-close.svg';
import documentIcon from '../assets/icons/icon-document.svg';
import menuIcon from '../assets/icons/icon-menu.svg';
import deleteIcon from '../assets/icons/icon-delete.svg';
import saveIcon from '../assets/icons/icon-save.svg';
import { useActions } from '../hooks/useActions';

const Container = styled.header`
  display: flex;
`;

const MenuIconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background: #35393f;
  border: none;
`;

const MenuIcon = styled.img`
  width: 23px;
  height: 14px;
`;

const CloseMenuIcon = styled.img`
  width: 22.6px;
  height: 22.6px;
`;

const SelectedDocument = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 8px;
  background-color: #2b2d31;
  flex-grow: 1;
`;

const File = styled.div`
  display: flex;
  align-items: center;
`;

const FileIcon = styled.img``;

const Title = styled.h2`
  font-weight: 400;
  size: 15px;
  line-height: 17.58px;
  color: #fff;
  padding-left: 16.29px;
`;

const Form = styled.form`
  padding-left: 16.29px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
`;

const DeleteIcon = styled.img``;

const SaveIconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #e46643;
  border: none;
  border-radius: 4px;
  margin-left: 24px;
`;

const SaveIcon = styled.img`
  width: 1rem;
  height: 1rem;
`;

interface Document {
  id: number;
  createdAt: string;
  name: string;
  content: string;
}

export default function Header() {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedTitle, setEditedTitle] = useState<string>('');
  const [selectedDocument, setSelectedDocument] = useState<null | Document>(
    null
  );
  const { menu, selectedDocumentId, documents } = useTypedSelector(
    (state) => state
  );
  const { updateDocumentTitle, menuOn, menuOff } = useActions();

  const inputRef = useRef(null);

  const menuState = menu ? (
    <CloseMenuIcon src={closeMenuIcon} alt="menu icon" />
  ) : (
    <MenuIcon src={menuIcon} alt="menu icon" />
  );

  useEffect(() => {
    const currentDocument = documents.find((document) => {
      return document.id === selectedDocumentId;
    });
    setSelectedDocument(currentDocument || null);
    setEditedTitle(selectedDocument?.name || '');
  }, [selectedDocumentId, selectedDocument, documents]);

  useEffect(() => {
    const clickOff = (e: MouseEvent) => {
      if (inputRef.current !== e.target) {
        console.log(editedTitle, selectedDocumentId);
        if (!editedTitle.trim()) {
          return;
        }
        if (selectedDocumentId === null) {
          return;
        }
        updateDocumentTitle(selectedDocumentId, editedTitle);
        setIsEditing(false);
      }
    };
    document.addEventListener('mousedown', clickOff);

    return () => {
      document.removeEventListener('mousedown', clickOff);
    };
  }, [inputRef, editedTitle, updateDocumentTitle, selectedDocumentId]);

  const editTitleElement = (
    <Form onSubmit={(e) => e.preventDefault()}>
      <input
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
        ref={inputRef}
      />
    </Form>
  );

  const titleState = isEditing ? (
    editTitleElement
  ) : (
    <Title onClick={() => setIsEditing(true)}>{selectedDocument?.name}</Title>
  );

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (menu) {
      menuOff();
    } else {
      menuOn();
    }
  };

  return (
    <Container>
      <MenuIconButton onClick={handleClick}>{menuState}</MenuIconButton>
      <SelectedDocument>
        <File>
          <FileIcon src={documentIcon} />
          {titleState}
        </File>
        <Icons>
          <DeleteIcon src={deleteIcon} />
          <SaveIconButton>
            <SaveIcon src={saveIcon} />
          </SaveIconButton>
        </Icons>
      </SelectedDocument>
    </Container>
  );
}
