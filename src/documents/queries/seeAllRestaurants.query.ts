import gql from "graphql-tag";
import { RESTAURANT_FRAGMENT } from "../fragments";

gql`
  ${RESTAURANT_FRAGMENT}

  query SeeAllRestaurants($input: SeeAllRestaurantsInput!) {
    seeAllRestaurants(input: $input) {
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
