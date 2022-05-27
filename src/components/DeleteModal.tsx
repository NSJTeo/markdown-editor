import {
  DeleteModalContainer,
  DeleteModalBody,
  DeleteModalHeader,
  DeleteModalText,
  DeleteModalButton,
} from '../styles';

export default function DeleteModal() {
  return (
    <DeleteModalContainer>
      <DeleteModalBody>
        <DeleteModalHeader>Delete this document?</DeleteModalHeader>
        <DeleteModalText>
          Are you sure you want to delete the ‘welcome.md’ document and its
          contents? This action cannot be reversed.
        </DeleteModalText>
        <DeleteModalButton>Confirm & Delete</DeleteModalButton>
      </DeleteModalBody>
    </DeleteModalContainer>
  );
}
