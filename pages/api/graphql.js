import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import MongoClientPromise from '@/lib/api/config/mongoDB'
import typeDefs from '@/lib/api/typeDefs';
import resolvers from '@/lib/api/resolvers';

MongoClientPromise()

const server = new ApolloServer({
    resolvers,
    typeDefs   
});

export default startServerAndCreateNextHandler(server, {
    context: async() => ({ db: await MongoClientPromise()})
});
