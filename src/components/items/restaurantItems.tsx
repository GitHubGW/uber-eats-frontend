import Loading from "../loading";
import RestaurantItem from "./restaurantItem";

interface RestaurantItemsProps {
  loading: boolean;
  restaurants: any;
}

const RestaurantItems = ({ loading, restaurants }: RestaurantItemsProps) => {
  return (
    <div className="flex justify-center items-center border-b py-10">
      <div className="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12">
        {loading === true ? (
          <Loading size="w-6" />
        ) : (
          <>
            {restaurants?.map((restaurant: any) => (
              <RestaurantItem
                key={restaurant.id}
                id={restaurant.id}
                name={restaurant.name}
                address={restaurant.address}
                imageUrl={restaurant.imageUrl}
                isPromoted={restaurant.isPromoted}
                promotedUntilDate={restaurant.promotedUntilDate}
                categoryName={restaurant.category?.name || ""}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default RestaurantItems;
