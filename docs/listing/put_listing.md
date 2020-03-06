# Update Listing

Used to update a specific listing from the database.

**URL** : `/api/v1/listings/:listingId`

**URL Parameters**: `listingId=[string]` where `listingId` is the ID of the listing on the server.

**Method** : `PUT`

**Auth required** : NO

**Permissions required** : None

**Data constraints**
The JSON body must not be empty. Fields that can be sent includes addtional_details and borrowed.

**Data example** All fields are optional, body must not be empty.
```json
{
	"additional_details": "Missing 4 cards." 
}
```

## Success Responses

**Condition** : Listing exists and body is not empty.

**Code** : `200 OK`

**Content** : 
```json
{
    "message": "listing successfully updated.",
    "success": true
}
```

## Error Response

**Condition** : If provided body is empty or listing does not exist.

**Code** : `400 BAD REQUEST`

**Content example** :

```json
{
    "message": "Failed to update listing: Error: Update() requires either a single JavaScript object or an alternating list of field/value pairs that can be followed by an optional precondition. At least one field must be updated.",
    "success": false
}
```