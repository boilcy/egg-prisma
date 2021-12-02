'use strict';
require("reflect-metadata");
const { resolvers } = require("@generated/type-graphql");
const { buildSchema } = require("type-graphql");
const { ApolloServer } = require('apollo-server-koa');
const { PrismaClient } = require("@prisma/client");

const SYMBOL_PRISMA = Symbol('Application#prisma');
module.exports = async app => {
    const schema = await buildSchema({ resolvers });
    const prisma = new PrismaClient();
    await prisma.$connect();
    const server = new ApolloServer({
        schema,
        context: () => ({ prisma }),
    });

    await server.start();
    server.applyMiddleware({ app });
    console.log(`🚀 GraphQL Server ready at ${server.graphqlPath}`);
    Object.defineProperty(app, 'prisma', {
        get() {
            if (!this[SYMBOL_PRISMA]) {
                this[SYMBOL_PRISMA] = prisma;
            }
            return this[SYMBOL_PRISMA];
        },
    });
};