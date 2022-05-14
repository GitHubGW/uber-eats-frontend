import gql from "graphql-tag";

export const LOGIN_MUTATION = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      ok
      message
      token
    }
  }
`;
