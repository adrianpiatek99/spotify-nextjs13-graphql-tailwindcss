import { schema } from "@/graphql/schema";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

const apolloServer = new ApolloServer({ schema });

export default startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({ req, res })
});
