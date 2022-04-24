import gql from "graphql-tag";

gql`
  mutation EditProfile($input: EditProfileInput!) {
    editProfile(input: $input) {
      ok
      message
    }
  }
`;
