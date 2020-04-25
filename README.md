This example demonstrates how to use [Express](http://expressjs.com/) 4.x and
[Passport](http://passportjs.org/) to authenticate users using Google Oauth2.0.  Use
this example as a starting point for your own web applications.

## Instructions

To install this example on your computer, clone the repository and install
dependencies.

```bash
$ git clone git@github.com:passport/express-4.x-google-oauth2.0-example.git
$ cd express-4.x-google-oauth2.0-example
$ npm install
```

The example uses environment variables to configure the client id and
client secret needed to access Google's API.  Start the server with those
variables set to the appropriate credentials.

```bash
$ GOOGLE_CLIENT_ID=__Google_CLIENT_ID__ GOOGLE_CLIENT_SECRET=__Google_CLIENT_SECRET__ node server.js
```

Open a web browser and navigate to [http://localhost:8080/](http://localhost:8080/)
to see the example in action.
