import Pagination from "../../components/pagination";
import RestaurantItems from "../../components/items/restaurantItems";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useSeeCategoryLazyQuery } from "../../generated/graphql";

type SeeCategoryParams = {
  name: string;
};

const SeeCategory = () => {
  const params = useParams<SeeCategoryParams>();
  const [page, setPage] = useState(1);
  const [seeCategoryLazyQuery, { data: seeCategoryData, loading: seeCategoryLoading }] = useSeeCategoryLazyQuery();

  useEffect(() => {
    seeCategoryLazyQuery({ variables: { input: { categoryName: params.name || "", page } } });
  }, [page, params.name, seeCategoryLazyQuery]);

  return (
    <>
      <RestaurantItems loading={seeCategoryLoading} restaurants={seeCategoryData?.seeCategory.category?.restaurants} />
      <Pagination page={page} setPage={setPage} totalPages={seeCategoryData?.seeCategory.totalPages || 1} />
    </>
  );
};

export default SeeCategory;
