const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')


const resolvers = {
  Query: {
      user(parent, args, context, info) {
          return prisma.user({id: args.id})
      }
  },
  User: {
      id(parent, args, context, info) {
          return parent.id
      },
      name (parent, args, context, info) {
          return parent.name
      }
  }
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers
})

server.start().then(() => console.log('Server running on http://localhost:4000...'))