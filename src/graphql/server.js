// express
import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
// GraphQL imports
import {graphqlExpress,graphiqlExpress} from 'graphql-server-express'
// The GraphQL schema and resolvers are found in data folder
import schema from './data/schema'

const setupGraphQLServer = () => {
  const graphQLServer = express()
  // the /graphql endpoint
  graphQLServer.use(
    "/graphql",
    bodyParser.urlencoded({ extended: true }),
    bodyParser.json(),
    cors(),
    graphqlExpress({ schema, context: {} })
  )

  // the /graphiql endpoint
  graphQLServer.use(
    "/graphiql",
    graphiqlExpress({
      endpointURL: "https://us-central1-xxxxxx-xxxxx-xxxxxx.cloudfunctions.net/myhook/graphql"
    })
  )
  return graphQLServer
}
export default setupGraphQLServer