This example demonstrates how to use [Express](https://expressjs.com) 4.x and
[Passport](https://www.passportjs.org) to log users in with [Facebook](https://www.facebook.com).
Use this example as a starting point for your own web applications.

## Quick Start

To get started with this example, clone the repository and install the
dependencies.

```bash
$ git clone git@github.com:passport/express-4.x-facebook-example.git
$ cd express-4.x-facebook-example
$ npm install
```

This example requires credentials from Facebook, which can be obtained by
[creating](https://developers.facebook.com/docs/development/create-an-app) an
app in the [App Dashboard](https://developers.facebook.com/apps).
The OAuth redirect URI of the app should be set to: `http://localhost:3000/oauth2/redirect/www.facebook.com`

Once credentials have been obtained, create a `.env` file and add the following
environment variables:

```
FACEBOOK_CLIENT_ID={{INSERT_APP_ID_HERE}}
FACEBOOK_CLIENT_SECRET={{INSERT_APP_SECRET_HERE}}
```

Start the server.

```bash
$ npm start
```

Navigate to [`http://localhost:3000`](http://localhost:3000).

