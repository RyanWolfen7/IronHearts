import gql from "graphql-tag";

const TestTypeDeff = gql`
    type TEST{
        id: ID!
        name: String!
    }
    type Query{
        tests: [TEST]
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
