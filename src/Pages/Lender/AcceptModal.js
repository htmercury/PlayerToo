import React from 'react';
import { Modal, Button } from 'semantic-ui-react';

const AcceptModal = ({ open, setModalOpen, deleteItem }) => {
  return (
    <Modal open={open}>
      <Modal.Header>
        Proposed Meet Up Details
      </Modal.Header>
      <Modal.Content>
        Are you sure you want to decline this request? 
      </Modal.Content>
      <Modal.Actions>
          <Button content="Accept" negative icon="check" onClick={() => setModalOpen(false)}/>
      </Modal.Actions>
    </Modal>
  );
};

export default AcceptModal;