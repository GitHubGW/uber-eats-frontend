import { useState } from "react";
import RestaurantItems from "../../components/items/restaurantItems";
import Pagination from "../../components/pagination";
import { useSeeAllRestaurantsQuery } from "../../generated/graphql";

const SeeAllRestaurants = () => {
  const [page, setPage] = useState(1);
  const { data: seeAllRestaurantsData, loading: seeAllRestaurantsLoading } = useSeeAllRestaurantsQuery({ variables: { input: { page } } });

  return (
    <>
      <RestaurantItems loading={seeAllRestaurantsLoading} restaurants={seeAllRestaurantsData?.seeAllRestaurants.restaurants} />
      <Pagination page={page} setPage={setPage} totalPages={seeAllRestaurantsData?.seeAllRestaurants.totalPages || 1} />
    </>
  );
};

export default SeeAllRestaurants;
