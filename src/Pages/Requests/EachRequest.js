import React, { useState, useEffect } from 'react';
import { Card, Icon, Header, Button, Image, Grid, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Each_Request = ({ data, games }) => {

  const [eachGameRequests, setEachGameRequests] = useState([]);
  console.log(data)
  useEffect(() => {
    const permittedValues = [];
    for (let i = 0; i < data.length; i++) {
      let temp = data[i]["requests"]
      let game = data[i]["game_id"]
      for (let j = 0; j < temp.length; j++) {
        permittedValues.push([temp[j], game]);
      }
    }
    console.log(permittedValues)
    setEachGameRequests(permittedValues);
  }, []);

  console.log(eachGameRequests)

  return (
    <Card.Group itemsPerRow={1}>
      {eachGameRequests.map(game =>
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
                  {game[0].borrower + game[1]}
                  <Label horizontal circular size='mini' style={{ marginLeft: "6px" }}>

                  </Label>
                  <Header.Subheader style={{ color: "grey", fontWeight: "bold", fontSize: "12px" }}>
                    {games[games.findIndex(g => g.id === game[1])].name}
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