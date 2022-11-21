require("dotenv").config();

const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const schema = require("./graphql");
require("./database");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

module.exports = app;
