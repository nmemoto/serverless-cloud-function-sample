if (!global._babelPolyfill) {
  require('babel-polyfill');
}
import { https } from "firebase-functions"
// The express setup is done in the file - src/graphql/server.js
import setupGraphQLServer from "./graphql/server"
const graphQLServer = setupGraphQLServer()
// Pass in your express app
export const myhook = https.onRequest(graphQLServer)