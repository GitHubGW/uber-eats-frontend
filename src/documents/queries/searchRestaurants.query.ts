import gql from "graphql-tag";
import { RESTAURANT_FRAGMENT } from "../fragments";

gql`
  ${RESTAURANT_FRAGMENT}

  query SearchRestaurants($input: SearchRestaurantsInput!) {
    searchRestaurants(input: $input) {
      ok
      message
      totalPages
      totalRestaurants
      restaurants {
        ...RestaurantFragment
      }
    }
  }
`;
