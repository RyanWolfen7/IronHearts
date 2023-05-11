import { gql } from '@apollo/client';

const CREATE_USER = gql`
    mutation Mutation($input: UserInput) {
        createUser(input: $input) {
            acknowledged
            insertedId
            message
        }
    }
`

export {
    CREATE_USER
}
