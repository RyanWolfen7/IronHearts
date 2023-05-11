import { gql } from '@apollo/client';

const GET_USERS = gql`
    query GET_USERS {
        users {
            _id
            email
            account {
                verified
                doner
                rank
                id
            }
            character {
                id
                name
                faction
                age
            }
        }
    }
`


export {
 

   GET_USERS
}
