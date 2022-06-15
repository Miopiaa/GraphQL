const { ApolloServer, gql } = require("apollo-server");
const { importSchema } = require("graphql-import");
const resolvers = require("./resolvers");

const schemaPath = "./schema/index.graphql";
const server = new ApolloServer({
  typeDefs: importSchema(schemaPath),
  resolvers,
  /*Serve pro código funcionar sabe deus o pq*/ csrfPrevention: true,
});

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`);
});
