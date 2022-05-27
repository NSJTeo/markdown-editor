import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import {
  DeleteModalContainer,
  DeleteModalBody,
  DeleteModalHeader,
  DeleteModalText,
  DeleteModalButton,
} from '../styles';
import { useEffect, useState } from 'react';

interface Document {
  id: number;
  createdAt: string;
  name: string;
  content: string;
}

export default function DeleteModal() {
  const { selectedDocumentId, documents } = useTypedSelector((state) => state);
  const { deleteDocument, deleteModalOff } = useActions();
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(
    null
  );

  useEffect(() => {
    const currentDocument = documents.find((document) => {
      return document.id === selectedDocumentId;
    });
    setSelectedDocument(currentDocument || null);
  }, [documents, selectedDocumentId]);

  if (selectedDocumentId === null) return null;
  if (selectedDocument === null) return null;

  return (
    <DeleteModalContainer onClick={() => deleteModalOff()}>
      <DeleteModalBody onClick={(e) => e.stopPropagation()}>
        <DeleteModalHeader>Delete this document?</DeleteModalHeader>
        <DeleteModalText>
          Are you sure you want to delete the '{selectedDocument.name}' document
          and its contents? This action cannot be reversed.
        </DeleteModalText>
        <DeleteModalButton onClick={() => deleteDocument(selectedDocumentId)}>
          Confirm & Delete
        </DeleteModalButton>
      </DeleteModalBody>
    </DeleteModalContainer>
  );
}
