# futsal
Match Maker Game

Sebuah aplikasi untuk mencari teman bermain futsal.  Kamu dapat menciptakan match dan bertanding dengan milyaran user lainnya :sunglasses:

How to use :
```
1. npm install
2. add google key config.js
3. add secret at .env
4. npm run dev

have fun :)
help: contact http://kumpulberbagi.com
```
## Route

| Route	        | HTTP           | Description |
| ------------- |:-------------| :-----|
| `/api/players/all`	| **GET** | Get all players |
| `/api/players/:username`     | **GET**     |   Get a player by username |
| `/api/players/:position`  | **GET**      | Get a player by position    |
|`/api/players/signup`| **POST** | Sign up with new user info|
|`/api/players/signin`| **POST** | Sign in while get an acces token based on credentials|
|`/api/players/:username` | **PUT** | Update individual player info |
|`/api/players/:username`| **DELETE** | Delete individual player data |
|`/api/matches/all`| **GET** | Show all matches|
|`/api/matches/make`| **POST** | Create Match with credentials|
|`/api/matches/join`| **PUT** | Join a match|
