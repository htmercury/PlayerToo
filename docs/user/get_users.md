# Retrieve Users

Used to retrieve all users from the database.

**URL** : `/api/v1/users/`

**Method** : `GET`

**Auth required** : NO

**Data**: `{}`

## Success Response

**Code** : `200 OK`

**Content example**

```json
[
  {
      "display_pic": "https://uinames.com/api/photos/female/3.jpg",
      "phone": "(437) 241 4892",
      "gender": "female",
      "rating": 2.590763670266419,
      "age": 28,
      "credit_card": {
        "security": 960,
        "pin": 6142,
        "number": "7802-9637-4560-1303",
        "expiration": "5/26"
      },
      "email": "ashley-brown@example.com",
      "name": "Ashley Brown",
      "distance": "9.5 mi",
      "id": "Brown92{~",
      "birthday": "06/12/1992"
    },
    {
      "display_pic": "https://uinames.com/api/photos/female/19.jpg",
      "phone": "(838) 544 5848",
      "gender": "female",
      "rating": 1.0588778280097466,
      "age": 34,
      "credit_card": {
        "security": 592,
        "pin": 1120,
        "number": "7636-2454-9832-2278",
        "expiration": "9/22"
      },
      "email": "melissa_86@example.com",
      "name": "Melissa Castro",
      "distance": "15 mi",
      "id": "Castro86(@",
      "birthday": "15/08/1986"
    },
    {
      "credit_card": {
        "security": 788,
        "pin": 4302,
        "number": "6181-1540-4061-5461",
        "expiration": "8/24"
      },
      "email": "tiffany88@example.com",
      "name": "Tiffany Collins",
      "distance": "12.9 mi",
      "id": "Collins88@",
      "birthday": "06/12/1988",
      "display_pic": "https://uinames.com/api/photos/female/24.jpg",
      "phone": "(684) 356 8900",
      "gender": "female",
      "rating": 1.2707553232712598,
      "age": 32
    }
]
```
