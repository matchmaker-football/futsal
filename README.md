# futsal
Match Maker Game

Sebuah aplikasi untuk menemukan partner bermain futsal. Kamu dapat bergabung dalam tim dan bertanding dengan tim lain dengan mudah. :sunglasses:

How to use :
1. npm install

##Route

| Route	        | HTTP           | Description |
| ------------- |:-------------| :-----|
| `/api/players/all`	| **GET** | Get all players |
| `/api/players/:username`     | **GET**     |   Get a player by username |
| `/api/players/:position`  | **GET**      | Get a player by position    |
|`/api/players/signup`| **POST**` | Sign up with new user info|
|`/api/players/signin`| **POST**` | Sign in while get an acces token based on credentials
