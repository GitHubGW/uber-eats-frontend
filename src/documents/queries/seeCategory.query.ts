import gql from "graphql-tag";
import { CATEGORY_FRAGMENT, RESTAURANT_FRAGMENT } from "../fragments";

gql`
  ${RESTAURANT_FRAGMENT}
  ${CATEGORY_FRAGMENT}

  query SeeCategory($input: SeeCategoryInput!) {
    seeCategory(input: $input) {
      ok
      message
      totalPages
      totalRestaurants
      category {
        ...CategoryFragment
        restaurants {
          ...RestaurantFragment
        }
      }
    }
  }
`;
