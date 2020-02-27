# Users

Used to retrieve a specific user from the database.

**URL** : `/api/v1/users/:userId`

**URL Parameters**: `userId=[string]` where `userId` is the ID of the board user on the server.

**Method** : `GET`

**Auth required** : NO

**Data**: `{}`

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "email": "ashley-brown@example.com",
  "name": "Ashley Brown",
  "distance": "9.5 mi",
  "id": "Brown92{~",
  "birthday": "06/12/1992",
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
  }
}
```

## Error Response

**Condition** : If ':userId' does not exist.

**Code** : `400 BAD REQUEST`

**Content** :

```json
false
```
