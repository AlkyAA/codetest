# node-js-getting-started

A barebones Node.js app using [Express 4](http://expressjs.com/).

This application supports the [Getting Started with Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone git@github.com:heroku/node-js-getting-started.git # or clone your own fork
$ cd node-js-getting-started
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

### home page
```
http://localhost:5000/home
```

# Rest API for Code Test

## show sample data:

```
http://localhost:5000/showSampleData
https://vast-hamlet-12361.herokuapp.com/showSampleData
```
## show sample filtered data:

```
http://localhost:5000/filterSampleData
https://vast-hamlet-12361.herokuapp.com/filterSampleData
```

## post data:

```
http://localhost:5000/
```

## show post data:

```
http://localhost:5000/showPostData
```

## show filtered post data:

```
http://localhost:5000/filteredData
```