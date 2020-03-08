import React from 'react';
import { Modal, Button, Label, Input } from 'semantic-ui-react';

const AcceptModal = ({ open, setModalOpen, meetUpLocation }) => {
    let location = meetUpLocation
    var time =  "4:00 pm"
    var date = "13/3/2020"
    const saveEditsLocation = input => {
        location = input.target.value;
      };
    const saveEditsTime = input => {
        time = input.target.value;
      };
      const saveEditsDate = input => {
        date = input.target.value;
      };
  return (
    <Modal open={open}>
      <Modal.Header>
        Proposed Meet Up Details
      </Modal.Header>
      <Modal.Content>
      <Label pointing='below'>Meeting location</Label>
      <Input
      defaultValue={meetUpLocation}
      fluid
      onChange={saveEditsLocation.bind(this)}
    ></Input>
    <br></br>
     <Label pointing='below'>Meeting time</Label>
     <Input
      defaultValue= {time}
      fluid
      onChange={saveEditsTime.bind(this)}
    ></Input>
    <br></br>
     <Label pointing='below'>Meeting date</Label>
     <Input
      defaultValue= {date}
      fluid
      onChange={saveEditsDate.bind(this)}
    ></Input>


        
      </Modal.Content>
      <Modal.Actions>
          <Button content="Confirm!" negative icon="check" onClick={() => setModalOpen(false)}/>
      </Modal.Actions>
    </Modal>
  );
};

export default AcceptModal;