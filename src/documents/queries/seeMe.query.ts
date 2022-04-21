import gql from "graphql-tag";

gql`
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
