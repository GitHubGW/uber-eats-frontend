import gql from "graphql-tag";

gql`
  mutation VerifyEmail($input: VerifyEmailInput!) {
    verifyEmail(input: $input) {
      ok
      message
    }
  }
`;
