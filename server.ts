import { readFileSync } from "fs";
import * as express from "express";
import { ApolloServer } from "apollo-server-express";
import { makeExecutableSchema } from "@graphql-tools/schema";

// Build GraphQL schema
import { resolvers } from "./resolvers";
const typeDefs = readFileSync("./typeDefs.graphql", { encoding: "utf-8" })
const schema = makeExecutableSchema({ typeDefs, resolvers });

const app = express();
async function startServer() {
  const server = new ApolloServer({ schema });
  await server.start();
  server.applyMiddleware({ app });
};
startServer();

app.listen({ port: 3000 }, () =>
  console.log(`Server ready at http://localhost:3000`)
);