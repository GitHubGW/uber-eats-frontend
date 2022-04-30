import gql from "graphql-tag";

export const RESTAURANT_FRAGMENT = gql`
  fragment RestaurantFragment on Restaurant {
    id
    name
    address
    imageUrl
    category {
      id
      name
      imageUrl
      totalRestaurants
    }
    isPromoted
    promotedUntilDate
  }
`;

export const CATEGORY_FRAGMENT = gql`
  fragment CategoryFragment on Category {
    id
    name
    imageUrl
    totalRestaurants
  }
`;
