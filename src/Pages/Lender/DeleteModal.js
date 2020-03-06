import React from 'react';
import { Modal, Button } from 'semantic-ui-react';

const DeleteModal = ({ open, setModalOpen, deleteItem }) => {
  return (
    <Modal open={open}>
      <Modal.Header>
        Delete Listing
      </Modal.Header>
      <Modal.Content>
        Are you sure you want to delete this listing? 
      </Modal.Content>
      <Modal.Actions>
          <Button content="Yes" negative icon="check" onClick={deleteItem} />
          <Button content="Cancel" icon="close" onClick={() => setModalOpen(false)} />
      </Modal.Actions>
    </Modal>
  );
};

export default DeleteModal;