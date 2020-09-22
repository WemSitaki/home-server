const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');

const graphQlSchema = require('./graphql/schema/index');
const graphQlResolvers = require('./graphql/resolvers/index');
const isAuth = require('./middleware/is-auth');
const expressPlayground =
    require('graphql-playground-middleware-express').default;


const { serialMonit } = require('./plugins/portMonitor');
serialMonit()

const app = express();

app.use(cors())

app.use(bodyParser.json());
app.use(isAuth);


app.use(
  '/graphql',
  graphqlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
  })
);





mongoose
  .connect(
    'mongodb://localhost:27017/home',{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }
  )
  .then(() => {
    console.log("ready")
    app.listen(4001);
    app.get('/playground', expressPlayground({ endpoint: '/graphql' }));
    
  })
  .catch(err => {
    console.log(err);
  });