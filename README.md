## Features

- Sign in using local authentication, Instagram or Google.
- Search for your other users.
- Chat with your friends in realtime.
- All feeds divided into 3 categories
  - suggestions
  - concerns
  - questions
- Like and comment on a feed.
- View your/others profile.
- Follow a particular user and get notified for his/her activities.
- Change your profile picture, bio, people who follow you etc.

## Requirements

- [Node.js](https://nodejs.org)
  - expressjs [ExpressJS HTTP middleware](https://npmjs.org/package/express)
  - ejs [Embedded JavaScript templates](https://npmjs.org/package/ejs)
- [MongoDB](http://mongodb.org)

## Installation

```bash
$ git clone .....
$ cd greenmedia
$ npm i
```

## Local Development

Before running, we need to add the Instgram and Google API Credentials to the project. Under the `config` directory of the repo, you will find `instagram.js` and `google.js`. We need to add the `<CLIENT_ID>`, `<CLIENT_SECRET>` and `<host>:<port>` with our own API credentials

```javascript
/** REPLACE YOUR API CREDENTIALS HERE **/
var in_client_id = 'XXXXXXXXXXXXXXXXXX', // <CLIENT_ID>
    in_client_secret = 'XXXXXXXXXXXXXXXXXXXX', // <CLIENT_SECRET>
```

Now Replace the `<host>` & `<port>` with the redirect uri specified in the [Instagram API Dashboard](https://www.instagram.com/developer) and [Google API Dashboard](https://developers.google.com). Default is `http://localhost:80/account/oauth`.

```javascript
var in_redirect_uri = "http://localhost:80/account/oauth/:service";
```

Finally start the MongoDB server in a seperate bash/pm2

```bash
$ mongod
```

and then start the greenmedia server via `npm`.

```bash
$ npm start
```

## To know

our project uses [mongoose](https://npmjs.org/package/mongoose) as an ORM for performing CRUD operations on MongoDB and [express.js](https://npmjs.com/package/express) for server-side HTTP routing.

## Authors
