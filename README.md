![Nodeplate logo](https://i.ibb.co/nz7xk5v/v1-logo.jpg)


### Introduction

Welcome to the **Nodeplate** repository.  
**Nodeplate** is a Node.js boilerplate to start easily your new REST API using 
Express.js, MongoDB and Typescript.

### Components

- [Typescript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org)
- [MongoDB (mongoose)](https://mongoosejs.com/)
- [Express.js](https://expressjs.com/fr/)
- [Yarn](https://yarnpkg.com/lang/fr/)
- [Winston](https://github.com/winstonjs/winston)
- [Prettier](https://prettier.io/)
- [Typescript-eslint (airbnb rules)](https://github.com/typescript-eslint/typescript-eslint)
- [Swagger](https://github.com/typescript-eslint/typescript-eslint)
- [Nodemon](https://nodemon.io/)
- [ts-node](https://github.com/TypeStrong/ts-node)
- [Jest](https://jestjs.io/)
- [Husky](https://github.com/typicode/husky)
- [Commitlint](https://commitlint.js.org/#/)

### API Use-case
To illustrate the boilerplate usage, we're taking the case of an API giving "Product" informations
stored in our MongoDB database. Each product has a "product_code".


### Getting started

>The commands are available in package.json.

##### Requirements

Before going directly to the installation, please make sure you have the
following plateform/tools on your computer  :

- Latest NodeJS version
- Yarn installed
- MongoDB database (make sure you have a stored login)

##### Environnement setup

First of all, you have to create your environnement typescript files in the 
"../src/config/environnements" folder, based on the "template.ts" file :

- dev.ts (developpement configuration)
- prod.ts (production configuration)

Specify your API_URL, MongoDB connection, log path,... *(see comments in 
template.ts)*

##### Installation

    $ yarn install

##### Starting server

   
In a developpement context run :

    $ cross-env NODE_ENV=development nodemon --watch "src/**/*.ts" --exec ts-node src/app.ts

In a production context run :

    $ cross-env NODE_ENV=production ts-node src/app.ts
    
##### Run specs

    $ yarn jest
    
##### Eslint

To run Eslint on the src files :

    $ eslint "src/**/*.ts"

##### Prettier

This project use prettier as a code formatter.

To check which src files are not formatted with prettier run :

    $ prettier --check "src/**/*.ts"

To run prettier on all src files :

    $ prettier --write "src/**/*.ts"

##### Intellij Plugins

For Intellij users (Webstorm or Ultimate), I advise you to install the following 
plugins for a better use :

- [ESLint](https://plugins.jetbrains.com/plugin/7494-eslint)
- [Prettier](https://plugins.jetbrains.com/plugin/10456-prettier)
