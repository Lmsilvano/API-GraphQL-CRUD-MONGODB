import { ApolloServer, PubSub } from 'apollo-server';
import mongoose from 'mongoose'
//uses para nao exibir msg de erro, perigoso

function startServer({ typeDefs, resolvers }) {
    mongoose.connect('mongodb://localhost:27017/graphql', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    //tunel de websocket
    const pubsub = new PubSub();
    const server = new ApolloServer({ typeDefs, resolvers, context: { pubsub } });
    server.listen(5555).then(({ url }) => console.log(`Server start at ${url}`))
}

export default startServer;