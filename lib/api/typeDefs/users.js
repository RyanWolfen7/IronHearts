import gql from "graphql-tag";

const TestTypeDeff = gql`
    type TEST {
        id: ID!
        name: String!
    }
    type ACCOUNT {
        id: ID!
        verified: Boolean
        doner: Boolean
        rank: Int
    }
    type CHARACTER {
        id: ID!
        name: String
        faction: String
        age: Int
    }
    type USER {
        _id: ID!
        email: String
        account: ACCOUNT
        character: CHARACTER
    }
    type Query{
        users: [USER]
        TEST(id: ID!): TEST
    }
    input CreateTESTInput{
        name: String!
    }
    input UpdateTESTInput{
        name: String
    }
    type DeletePayload{
        id: ID!
    }
    type Mutation{
        createTest(input: CreateTESTInput!): TEST!
        updateTest(id: ID, input: UpdateTESTInput!): TEST!
        deleteTest(id: ID): DeletePayload!
    }
`;

export default TestTypeDeff
