import React, { useEffect, useState } from 'react';
import { fireDb } from '../../firebase';

import { Header, Image, Table } from 'semantic-ui-react';

const GameTableExample = () => {
    const [games, setGames] = useState([]);

    // Querying example for Games
    useEffect(() => {
        fireDb
            .collection('BoardGames')
            .orderBy('rating', 'desc')
            .limit(100)
            .get()
            .then(docSnaps => {
                const gameData = [];
                docSnaps.forEach(doc => gameData.push(doc.data()));
                setGames(gameData);
            });
    }, []);

    console.log(games);

    return (
        <Table celled collapsing>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Game Id</Table.HeaderCell>
                    <Table.HeaderCell>Basic Info</Table.HeaderCell>
                    <Table.HeaderCell>Tags</Table.HeaderCell>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                    <Table.HeaderCell>Year Published</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {games.map(g => (
                    <Table.Row key={g.id}>
                        <Table.Cell>{g.id}</Table.Cell>
                        <Table.Cell>
                            <Header as="h4" image>
                                <Image
                                    src={g.images.original}
                                    rounded
                                    size="mini"
                                />
                                <Header.Content>
                                    {g.name}
                                    <Header.Subheader>
                                        max_players: {g.max_players} <br />
                                        min_players: {g.min_players} <br />
                                        primary_publisher: {g.primary_publisher}
                                        <br />
                                        rating: {g.rating}
                                    </Header.Subheader>
                                </Header.Content>
                            </Header>
                        </Table.Cell>
                        <Table.Cell>
                            {<p>tags: {g.tags.join(", ")}</p>}
                        </Table.Cell>
                        <Table.Cell>
                            {<p>description: {g.description}</p>}
                        </Table.Cell>
                        <Table.Cell>
                            {<p>year_published: {g.year_published}</p>}
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    );
};

export default GameTableExample;
