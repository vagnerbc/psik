# PSIK Graphql API

API created with Graphql and Nodejs to manage the PSIK project.

PSIK is a project to manage student information and university library books.


## Prerequisites

For run this application you need to have installed:
- NodeJS
- Docker and Docker Compose

## Tests

To run the unit tests you need to execute the following command:

    npm run test
    
## Usage

The first step is rename the file .env.example to .env and fill the variables with your data or mantain the default values.

The application is dockerized, so to run the application you need to execute the following command:

    docker-compose up -d


To stop the application you need to execute the following command:

    docker-compose down


## Documentation

The **documents** folder contain two files:
- samples-queries.txt 
  - Contains some examples of queries to the API.
- postman_collection.json:
  - Contains the postman collection to test the API.

## API requests

To make API requests:
- Import the postman collection on postman and execute the queries.
  
Or

- Execute the queries on the file samples-queries.txt on the playground of Graphql (http://localhost:4000/graphql).



