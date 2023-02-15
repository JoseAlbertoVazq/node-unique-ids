# Node Unique IDS Take Home Test

# Pre-requisites
- Install [Node.js](https://nodejs.org/en/)


# Getting started
- Install dependencies
```
npm install
```
- Build and run the project
```
npm start
```
  Navigate to `http://localhost:4000`


# Requeriments 

## Identity Service
FX Labs has many different systems generating currency trades.
So that our clients can easily look up individual trades, we
want to assign each trade its unique 7-character alphanumeric
human-readable ID.
Example: B762F00
An API will use this package to create new unique IDs on demand.
## Task
You will need to complete the code in `/generation.js`.In addition, you will have
to expose this data in a Public API.
Also you will need to build the test suite that can be used for reference to give
you some ideas about the requirements we will be looking for:
1. `test_generation.js` will test the basic ID generation and formatting for the
single and bulk operations.
2. `test_performance` will test that the solution will finish in a timely fashion.
3. `test_restarting_process.js` will test that the solution can recover


## Project Structure
The folder structure of this app is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **assets**               | Contains a txt file that will be created with the first API request call. It will store all the IDs already created, and will be checked for unicity.
| **node_modules**         | Contains all  npm dependencies                                                            |
| **src**                  | Contains  source code                              |
| **config**               | Application configuration for logs purposes
| **src/controllers**      | Controllers define functions to serve express routes. 
| **src/routes**           | Contains express route that performs some actions before calling the controller              
| **src/validator**        | Contains some validator using express-validation to check that the request body is as expected |
| index.js                 | Entry point to express app                                                               |
| package.json             | Contains npm dependencies as well as build scripts.

## Building the project

### Running the build
All the different build steps are orchestrated via [npm scripts](https://docs.npmjs.com/misc/scripts).
Npm scripts basically allow us to call (and chain) terminal commands via npm.

| Npm Script | Description |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| `start`                   | Runs full build and runs node on index.js. Can be invoked with `npm start`                  |
| `dev`                     | Runs full build before starting all watch tasks using nodemon. Can be invoked with `npm run dev`                                         |
| `test`                    | Runs build and run tests using jest. Can be invoked with `npm run test`        |

## Testing
The tests are  written in Jest. This tests are located in src/test folder.

```
  "jest": "^29.4.2",
```

After running tests, a /coverage folder will be created with some info about the results.

## Behaviour of API request "generateIds"

The API call is a POST request that expects in the body a "count" field that has to be a Number or a String that can be parsed to a Number. Any other field or data type will not pass the 
validation process and will throw a 422 error, as an "Unproccesable Entity"

## Logs
This project use winston to create logs of API calls and specially errors. They will be stored at /log folder that will be automatically created when the project runs for the first time.
It will also separate logs by days of month.


## Author
José Alberto Vázquez López
@JoseAlbertoVazq

