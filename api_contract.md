# API AirBoy Forum

## Major info

* All requests return JSON array or objects
* Essential entities `article`, `user`.

## Response codes used in this api
Every error has unique code ane message about details

* HTTP `4XX` - client-side error
* HTTP `400` - bad request
* HTTP `401` - authorization failed
* HTTP `403` - forbidden - you dont have access to this resource
* HTTP `404` - `GET` resource does not exist
* HTTP `409` - `POST` resource already exists
* HTTP `5XX` - server-side error

## Data format

* Data in `GET` and `DELETE` requests should be send in URI as parameter (for example `mydomain.com/article?search=1`)
* Data in `POST` and `PUT` requests should be send in `request body` in JSON (`application/json`). Order doesn't matter.

## Security

Some of the endpoints require JWT (JavaScript Web Token) generated by the `/login` endpoint after supplying correct username and password.
Those endpoints are marked using the `*` in the table below.

## Endpoints


| Resource          | POST         | PUT           | GET                   | DELETE          |
|-------------------|--------------|---------------|-----------------------|-----------------|
| /api/article      | add article* | Error         | list of all articles  | Error           |
| /api/article/{id} | Error        | edit article* | get article           | delete article* |
| /api/user         | add user     | Error         | list of all users     | Error           |
| /api/user/{id}    | Error        | edit user*    | get user              | delete user*    |
| /files/{filename} | Error        | Error         | get file              | Error			 |
| /login			| return JWT   | Error         | Error				   | Error			 |


### enums

SortUserEnum

| Value   | Comment    |
|---------|------------|
| NAME    | by name    |
| ID      | by id      | 


SortArticleEnum

| Value | Comment            |
|-------|--------------------|
| NAME  | by name            |
| DATE  | by date added      |
| VIEWS | by views           |
| ID    | by id              | 


#### Get list of vessels

Returns full vessel list

```
GET /api/article
```

URI parameters


| Name   | Type            | Required | Comment                | Default if not added |
|--------|-----------------|----------|------------------------|----------------------|
| limit  | int			   | no       | limit the response     | 20                   |
| offset | int			   | no       | offset in the search   | 0	                  |
| sortBy | SortArticleEnum | no       | changes sort method    | DATE                 |
| order  | int			   | no       | descending order	   | 0			          |
| search | string          | no       | search phrase          |                      |


Response

HTTP `200`

```javascript
[
    {
        "id": 0,
        "title": "Mijakspad",
        "content": "W Mijakspad mijak spada...",
        "download_url": "/files/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.txt",	// url to file
        "added": "YYYY-MM-DDThh:mm:ssZ",								// iso 8601
        "last_edit": "YYYY-MM-DDThh:mm:ssZ",
        "author": {
            "id": 1,
            "username": "johndoe",
			"privileges": "superadmin"
        },
        "tags": [
            "mijak",
            "spadanie"
        ],
        "views": 69
    }
]
```


#### Add new article

Requires a JWT.

```
POST /api/article
```

Request body parameters (should be sent as form)


| Name       | Type         | Required   | Comment              |
|------------|--------------|------------|----------------------|
| title      | string       | yes        | len > 3              |
| content    | string       | yes        | len > 10             |
| file       | file         | yes        | max 128 MB		    |
| tags       | string[]     | no         | array with tag names |

Allowed filenames:

 - zip
 - txt
 - c
 - jpg
 - jpeg
 - png
 - gif
 - h

Response

HTTP `200`


#### Get article

Get specific article by id

```
GET /api/article/{id}
```

Response

HTTP `200`

```javascript
[
    {
        "id": 0,
        "title": "Mijakspad",
        "content": "W Mijakspad mijak spada...",
        "download_url": "/files/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.txt",	// url to file
        "added": "YYYY-MM-DDThh:mm:ssZ",								// iso 8601
        "last_edit": "YYYY-MM-DDThh:mm:ssZ",
        "author": {
            "id": 1,
            "username": "johndoe",
			"privileges": "superadmin"
        },
        "tags": [
            "mijak",
            "spadanie"
        ],
        "views": 69
    }
]
```


#### Edit vessel data

Update vessel data

Requires a JWT with the same identity as the author of the article or a higher level of privilege.

```
PUT /api/article/{id}
```

Request body parameters (should be sent as form)


| Name       | Type         | Required   | Comment							|
|------------|--------------|------------|----------------------------------|
| title      | string       | no         | len >= 3							|
| content    | string       | no         | len >= 10						|
| file       | file         | no         | file								|
| tags       | string[]     | no         | will replace all of the old tags |


Response

HTTP `200`


#### Remove article

Remove vessel totally

Requires a JWT with the same identity as the author of the article or a higher level of privilege.

```
DELETE /api/article/{id}
```

Response

HTTP `204`


#### Get list of users

```
GET /api/user
```

URI parameters

| Name   | Type            | Required | Comment                | Default if not added |
|--------|-----------------|----------|------------------------|----------------------|
| limit  | int			   | no       | limit the response     | 20                   |
| offset | int		       | no       | offset in the search   | 0	                  |
| sortBy | SortUserEnum    | no       | changes sort method    | ID	                  |
| order  | int			   | no       | descending order	   | 0			          |
| search | string          | no       | search phrase          |                      |


Response

HTTP `200`

```javascript
[
    {
        "id": 1,
        "username": "johndoe",
        "privileges": "superadmin"
    },
    {
        "id": 2,
        "username": "test1",
        "privileges": "admin"
    },
	{
		"id": 3,
		"username": "test2",
		"privileges": "regular"
	}
]
```


#### Add new user

```
POST /api/user
```

Request body parameters (should be sent as form)


| Name       | Type         | Required   | Comment					   |
|------------|--------------|------------|-----------------------------|
| username   | string       | yes        | len >= 3					   |
| password   | string       | yes        | len >= 8 and in plain text  |
| email      | string       | yes        |							   |


Response

HTTP `200`


#### Get user

```
GET /api/user/{id}
```

Response

HTTP `200`

```javascript
{
	"id": 1,
	"username": "johndoe",
	"privileges": "superadmin"
}
```


#### Delete user

Requires a JWT with the same identity as the author of the article or a higher level of privilege.

```
DELETE /api/user/{id}
```

Response

HTTP `204`


#### Update user

Requires a JWT with the same identity as the user of the article or a higher level of privilege. 
(Only the user can change username, password and email)

```
PUT /api/user/{id}
```

Request body parameters (should be sent as form)


| Name       | Type         | Required   | Comment					   |
|------------|--------------|------------|-----------------------------|
| username   | string       | no		 | len >= 3					   |
| password   | string       | no		 | len >= 8 and in plain text  |
| email      | string       | no		 |							   |
| privileges | int	        | no         | 1, 2 or 3, 3 is the highest |


Response

HTTP `200`


#### Login

Generate JWT given correct credentials

```
POST /api/login
```

Request body parameters (should be sent as form)

| Name       | Type         | Required   | Comment |
|------------|--------------|------------|---------|
| username   | string       | yes		 |		   |
| password   | string       | yes		 |		   |


Response

HTTP `200`

```javascript
{
	"token": "xxxxx..." (proper JWT)
}
```


#### Get file

Returns a specific file

```
GET /api/files/{filename}
```


Response

HTTP `200`

```
(file contents)
```