<div align="center">
<img src="https://codemoto.io/wp-content/themes/cloudhost/library/images/node-express-mongo.png">
</div>

# Template rest

The idea behind this repo is to show how to use typescript with nodejs and also i've added a little flavor to the api using, Yup to validate the request body, Bcrypt to hash the password, JWT to handle tokens, Mongoose to handle the mongodb, docker + docker-compose to handle docker containers, and also Jest and Super test to test the endpoints.

# Motivation

The idea behind this repo is to be a simple repository with express, but production ready with authentication middlewares, body validators, password hashing and also with a sample of Docker + Docker compose to use and run inside a container.

# How to run

### Before we start you need to install the following stuff on your machine to work

- Docker
  - https://docs.docker.com/get-docker/
  - https://docs.docker.com/compose/install/
- Nodejs
  - https://nodejs.org/en/download/
- Mongo

  - https://docs.mongodb.com/manual/administration/install-community/
    Optional:

- Yarn
  - https://yarnpkg.com/getting-started/install

### Running

There's two ways to run the code

1. Using docker will simply deploy a docker container with the mongodb and the node up and running at port 3000:

   - Clone the repo and run the command `docker-compose up`

2. Using yarn/npm we will simply install the deps and run the project:

   - Clone the repo
   - Install dependencies using `npm install` or `yarn`
   - After run the following command `npm start` or `yarn start`

# How to Contribute?

Just take a fork of this repo and send us a pull request following the templates for PR's, and assign me as a reviewer on the Pull Request
