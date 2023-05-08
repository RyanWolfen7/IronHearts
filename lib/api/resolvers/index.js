import mutations from './mutations';
import queries from './queries';

const resolvers =  {
    Mutation: {
        ...mutations
    },
    Query: {
        ...queries
    }
}
// console.log("========================CREATE TEST=============================\n\n", resolvers, '\n\n============================================\n\n')

export default resolvers
