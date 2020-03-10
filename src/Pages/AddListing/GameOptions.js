import React, { useState } from 'react';
import { Card, Icon, Header, Button, Image } from 'semantic-ui-react';
import RequestModal from '../Listing/RequestModal';
import { Link } from 'react-router-dom';

const Game_List = ({ data }) => {

    function Add_Listing (game){
        console.log("Added the listing to the databse " + game.id);
    //Code to add listing to the databse
    }

    return (
        <Card.Group itemsPerRow={1}>
            {data.map(game =>
              <Card 
                key={game.id} 
                fluid 
                header={game.name} 
                onClick={() => Add_Listing(game)} 
                as={Link} 
                to={`/addListing/${game.id}`}>
              </Card>
            )}
        </Card.Group>
    );
};

export default Game_List;