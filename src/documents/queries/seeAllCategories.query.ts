import gql from "graphql-tag";
import { CATEGORY_FRAGMENT } from "../fragments";

gql`
  ${CATEGORY_FRAGMENT}

  query SeeAllCategories {
    seeAllCategories {
      ok
      message
      category {
        ...CategoryFragment
      }
    }
  }
`;
