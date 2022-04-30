import gql from "graphql-tag";
import { RESTAURANT_FRAGMENT } from "../fragments";

gql`
  ${RESTAURANT_FRAGMENT}

  query SeeRestaurant($input: SeeRestaurantInput!) {
    seeRestaurant(input: $input) {
      ok
      message
      restaurant {
        ...RestaurantFragment
      }
    }
  }
`;
