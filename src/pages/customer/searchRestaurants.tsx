import Pagination from "../../components/pagination";
import RestaurantItems from "../../components/items/restaurantItems";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { useSearchRestaurantsLazyQuery } from "../../generated/graphql";

const SearchRestaurants = () => {
  const location = useLocation();
  const [page, setPage] = useState(1);
  const [searchRestaurantsLazyQuery, { data: searchRestaurantsData, loading: searchRestaurantsLoading }] = useSearchRestaurantsLazyQuery();

  useEffect(() => {
    const keyword: string = decodeURI(location.search).split("?keyword=")[1];
    searchRestaurantsLazyQuery({ variables: { input: { restaurantName: keyword, page } } });
  }, [location.search, searchRestaurantsLazyQuery, page]);

  return (
    <>
      <RestaurantItems loading={searchRestaurantsLoading} restaurants={searchRestaurantsData?.searchRestaurants.restaurants} />
      <Pagination page={page} setPage={setPage} totalPages={searchRestaurantsData?.searchRestaurants.totalPages || 1} />
    </>
  );
};

export default SearchRestaurants;
