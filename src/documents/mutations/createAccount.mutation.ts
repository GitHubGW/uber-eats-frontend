import gql from "graphql-tag";

gql`
  mutation CreateAccount($input: CreateAccountInput!) {
    createAccount(input: $input) {
      ok
      message
    }
  }
`;
