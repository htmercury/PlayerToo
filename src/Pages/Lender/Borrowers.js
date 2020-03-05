import React, { useState } from 'react';
import { Card, Icon, Button, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Borrowers = ({ data }) => {
    return (
        <div>
            <Card.Group centered>
                <Card>
                    <Card.Content>
                        <Image
                            floated="right"
                            size="mini"
                            src="https://www.theheadshotguy.co.uk/wp-content/uploads/2014/12/Screen-Shot-2014-12-02-at-11.14.42.png"
                        />
                        <Card.Header>James Smith</Card.Header>
                        <Card.Meta>
                            <Icon name="star" /> 3.6
                        </Card.Meta>
                        <Card.Description>13 March - 17 March</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Button.Group fluid>
                            <Button color="yellow" labelPosition="left" icon>
                                <Icon name="check" />
                                Approve
                            </Button>
                            <Button color="grey" labelPosition="right" icon>
                                <Icon name="close" />
                                Decline
                            </Button>
                        </Button.Group>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    );
};

export default Borrowers;
