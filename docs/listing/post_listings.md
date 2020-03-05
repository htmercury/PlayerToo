# Create Listing

Create an Listing given a user, a game, and optionally additonal details.

**URL** : `/api/v1/listings/`

**Method** : `POST`

**Auth required** : NO

**Permissions required** : None

**Data constraints**

Provide user id and game id of the listing. Provide additional details optionally if needed.

**Data example** All fields except additional_details must be sent.

```json
{
	"user_id": "Silva91_^",
	"game_id": "SCmjSN4Quv",
	"additional_details": "Missing 3 cards." 
}
```

## Success Response

**Condition** : If everything is OK and the user_id / game_id are valid in the firestore.

**Code** : `201 CREATED`

**Content example**

```json
{
    "message": "listing was added.",
    "success": true
}
```

## Error Responses

**Condition** : If either game_id or user_id was not supplied. Otherwise, if either ids are not valid.

**Code** : `400 BAD REQUEST`

**Headers** : `Content-Type: application/json`

**Content example**

```json
{
    "message": "game_id or user_id was undefined.",
    "success": false
}
```