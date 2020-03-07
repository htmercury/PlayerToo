import React, { useState, useEffect } from 'react';
import { Card, Icon, Header, Button, Image, Grid, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Each_Request = ({ data }) => {

  const [eachGameRequests, setEachGameRequests] = useState([]);
  
  useEffect(() => {
    const permittedValues = [];
    for (let i = 0; i < data.length; i++) {
      let temp = data[i]["requests"]
      for (let j = 0; j < temp.length; j++) {
        permittedValues.push(temp[j]);
      }
    }
    console.log(permittedValues)
    setEachGameRequests(permittedValues);
  }, []);

  
  return (
    <Card.Group itemsPerRow={1}>
      {data.map(game =>
        <Card
          fluid
        >
          <Card.Content>
            <Grid columns={2}>
              <Grid.Column width={3}>
                <Image.Group size="tiny">
                  <Image />
                </Image.Group>
              </Grid.Column>
              <Grid.Column width={13}>
                <Header as="h3">
                  {game.borrower}
                  <Label horizontal circular size='mini' style={{ marginLeft: "6px" }}>

                  </Label>
                  <Header.Subheader style={{ color: "grey", fontWeight: "bold", fontSize: "12px" }}>
                    1 New Loan Request
                </Header.Subheader>
                </Header>
              </Grid.Column>
            </Grid>
          </Card.Content>
          <Card.Content extra>
            <Button
              basic
              color="green"
              content="Confirm"
              icon='close'
              size='tiny'
              compact
            />
            <Button
              basic
              color="red"
              content="Delete"
              icon='close'
              size='tiny'
              compact
            />
          </Card.Content>
        </Card>
      )}
    </Card.Group>
  );
};

export default Each_Request;