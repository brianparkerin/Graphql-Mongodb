import { makeRemoteExecutableSchema } from 'graphql-tools';
import  { resolvers } from "./resolvers";

export const typeDefs = `
  type Query {
    hello: String!
  }

  `;


export default makeRemoteExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})
