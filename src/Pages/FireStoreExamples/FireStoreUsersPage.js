import React, { useEffect, useState } from 'react';
import { fireDb } from '../../firebase';

import { Header, Image, Table } from 'semantic-ui-react';

const UserTableExample = () => {
    const [users, setUsers] = useState([]);

    // Querying example for users
    useEffect(() => {
        fireDb
            .collection('Users')
            .orderBy('age', 'desc')
            // .limit(100)
            .get()
            .then(docSnaps => {
                const usersData = [];
                docSnaps.forEach(doc => usersData.push(doc.data()));
                setUsers(usersData);
            });
    }, []);

    console.log(users);

    return (
        <Table celled collapsing>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>User Id</Table.HeaderCell>
                    <Table.HeaderCell>Basic Info</Table.HeaderCell>
                    <Table.HeaderCell>Contact Info</Table.HeaderCell>
                    <Table.HeaderCell>Distance</Table.HeaderCell>
                    <Table.HeaderCell>Credit Card Info</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {users.map(u => (
                    <Table.Row key={u.id}>
                        <Table.Cell>{u.id}</Table.Cell>
                        <Table.Cell>
                            <Header as="h4" image>
                                <Image
                                    src={u.display_pic}
                                    rounded
                                    size="mini"
                                />
                                <Header.Content>
                                    {u.name}
                                    <Header.Subheader>
                                        age: {u.age} <br />
                                        birthday: {u.birthday} <br />
                                        gender: {u.gender} <br />
                                        rating: {u.rating} <br />
                                    </Header.Subheader>
                                </Header.Content>
                            </Header>
                        </Table.Cell>
                        <Table.Cell>
                            <Header>
                                <Header.Subheader>
                                    phone: {u.phone} <br />
                                    email: {u.email}
                                </Header.Subheader>
                            </Header>
                        </Table.Cell>
                        <Table.Cell>
                            <p>distance: {u.distance}</p>
                        </Table.Cell>
                        <Table.Cell>
                            <Header>
                                <Header.Subheader>
                                    number: {u.credit_card.number} <br />
                                    pin: {u.credit_card.pin} <br />
                                    security: {u.credit_card.security} <br />
                                    expiration: {u.credit_card.expiration}
                                </Header.Subheader>
                            </Header>
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    );
};

export default UserTableExample;
