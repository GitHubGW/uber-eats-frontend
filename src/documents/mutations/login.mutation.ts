import gql from "graphql-tag";

gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      ok
      message
      token
    }
  }
`;
