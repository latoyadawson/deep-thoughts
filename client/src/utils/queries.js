import { gql } from '@apollo/client';

export const QUERY_THOUGHTS = gql `
    query thoughts($usernmae: String) {
        thoughts(username: $username) {
            _id
            thoughtText
            createdAt
            username
            reactionCount
            reactions {
                _id
                createdAt
                username
                reactionBody
            }
        }
    }
`;