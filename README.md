## mvcbridge-sdk@1.0.0

### Usage

This is the sdk for sending request to mvcbridge, follow these steps to transform your asset through mvcbridge.

1. Build and send on-chain transaction using your own wallet client instance(ie. metalet, metamask). Save the transaction hash.
2. Use this sdk to generate a transfer request and sign the request content.
3. Send the signed request to mvcbridge server.

### Example

```typescript
import {MvcBridgeSdk} from 'mvcbridge-sdk';
import {OrderApi} from "./api";

// 1. Build and send on-chain transaction using your own wallet client instance(ie. metalet, metamask). Save the transaction hash.
// todo: build and send on-chain transaction(ie. metalet, metamask)

// 2. Use this sdk to generate a transfer request and sign the request content.
const orderApi = new OrderApi();
```


### Openapi generator
This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition should be automatically resolved via `package.json`. ([Reference](http://www.typescriptlang.org/docs/handbook/typings-for-npm-packages.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run ```npm publish```

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install mvcbridge-sdk@1.0.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
