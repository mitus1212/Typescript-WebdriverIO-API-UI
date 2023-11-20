# Typescript-WebdriverIO-API-UI

I've creted two separate repositories, because api tests could be much faster and more reliable than ui. API tests could be used as fast check if the application is working from backend perspective. Test could be easily run on github actions.

# UI tests

Implemented using Typescript with WebdriverIo and Cucumber.
NodeJs 18.15.0 or newer is required to run tests.

# How to run all tests:

`npm run wdio`

# How to run specific feature:

Login tests, for example:

`npm run wdio -- --spec features/login.feature`

## How to run sanity tests:

`npm run wdio -- --cucumberOpts.tagExpression='@sanity'`

Test results are visible in the console and report is generated in xml format to ".tmp/json/" directory and screenshots from failing scenarios are located in "/screenshots" direcotry.

# Api tests

Implemented using Typescript with Supertest.
NodeJs 18.15.0 or newer is required to run tests.

# How to install dependencies:
`npm i`

# How to run all tests:
`npm run test`

# How to run specific test:
`npm test path/of/your/testfile.js -t "test name"`

## Example:
`npm test tests/login.test.ts -t "" ""`

Test results are visible in the console and report is generated in xml format to "/out/report/" directory
