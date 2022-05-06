import gql from "graphql-tag";

export const SEE_ME_QUERY = gql`
  query SeeMe {
    seeMe {
      id
      email
      username
      emailVerified
      role
      createdAt
      updatedAt
    }
  }
`;
