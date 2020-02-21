const NUM_USERS = 25;

const fetch = require('node-fetch');

const createUsers = async () => {
    const resp = await fetch(
        `https://uinames.com/api/?ext&region=united%20states&amount=${NUM_USERS}`
    );
    const usersData = await resp.json();

    const users = {};

    usersData.map(ud => {
        const rating = Math.random() * 5;
        const distance = `${Math.round( Math.random() * 200 ) / 10} mi`

        users[ud.password] = {
            id: ud.password,
            name: ud.name,
            gender: ud.gender,
            age: ud.age,
            phone: ud.phone,
            birthday: ud.birthday.dmy,
            email: ud.email,
            credit_card: ud.credit_card,
            display_pic: ud.photo,
            rating,
            distance
        };

        console.log(users[ud.password]);

        return 1;
    });
};

createUsers();
