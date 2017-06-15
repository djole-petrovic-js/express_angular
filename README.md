# angularCLI-with-express-starter

For using **angularCLI-with-express-starter** you have to be installed globally:
[node.js](https://nodejs.org/en/), [npm](https://www.npmjs.com/get-npm?utm_source=house&utm_medium=homepage&utm_campaign=free%20orgs&utm_term=Install%20npm), [nodemon](https://github.com/remy/nodemon), [typescript](https://www.npmjs.com/package/typescript), [angular CLI](https://github.com/angular/angular-cli)

First, clone the project:
```bash
$ git clone https://github.com/commercialsuicide/angularCLI-with-express-starter.git
$ cd angularCLI-with-express-starter
```

Install necessary dependencies:
```bash
$ npm install
```

# Run the project in developer mode

For running the **angularCLI-with-express-starter**, you need to start separately **express server** and **angular CLI** (in two different terminals):
```bash
$ npm run startExpress
```
and
```bash
$ npm run startAngular
```
Now open **localhost:4200** and check the connection between Angular and Express: push the *"Test"* button on the page. If it shows *"Requests to server are OK"* - the connection is OK.

For communication between Angular and Express we are using proxy, proxy configuration is in `proxy.config.json`. When you need to create more routes, you have to add them to `proxy.config.json` too, by analogy with default `/test-route`.

# Build the project

You can build the project using
```bash
$ ng build
```
Or for production usage you have to build your app using
```bash
$ ng build --prod --aot
```
