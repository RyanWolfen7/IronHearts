import gql from "graphql-tag";

const UsersTypeDef = gql`
    type Account {
        id: ID
        verified: Boolean
        doner: Boolean
        rank: Int
    }
    type Character {
        id: ID
        name: String
        faction: String
        age: Int
    }
    type USER {
        _id: ID!
        email: String
        account: Account
        character: Character
    }
    type Query{
        users: [USER]
    }

    type MongoRes {
        acknowledged: Boolean
        insertedId: ID
        message: String
    }

    input AccountInput {
        verified: Boolean
        doner: Boolean
        rank: Int
    }

    input CharacterInput {
        name: String
        faction: String
        age: Int
        mos: String
        bio: String
    }
    input UserInput {
        email: String!
        password: String!
        account: AccountInput
        character: CharacterInput
    } 

    type Mutation{
        createUser(input: UserInput): MongoRes
        # createTest(input: CreateTESTInput!): TEST!
        # updateTest(id: ID, input: UpdateTESTInput!): TEST!
        # deleteTest(id: ID): DeletePayload!
    }
`;

export default UsersTypeDef
