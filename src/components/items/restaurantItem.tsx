import { Link } from "react-router-dom";

interface RestaurantItemProps {
  id: number;
  name: string;
  address: string;
  imageUrl: string;
  isPromoted: boolean;
  categoryName?: string;
  promotedUntilDate?: any;
}

const RestaurantItem = ({ id, name, address, imageUrl, isPromoted, categoryName, promotedUntilDate }: RestaurantItemProps) => {
  return (
    <div className="cursor-pointer">
      <Link to={`/restaurants/${id}`}>
        <div className="h-64 overflow-hidden relative">
          <img src={imageUrl} alt="" data-testid="restaurant-item-image" className="w-full h-[250px] max-h[250px]" />
          {isPromoted === true ? <img src="/images/icon_promo.png" alt="" data-testid="promo-image" className="w-8 h-8 z-50 absolute top-2 right-2" /> : null}
        </div>
        <div>
          <h2 className="font-medium mt-2">{name}</h2>
          <p className="border-b pb-1.5 text-[15px] text-gray-800">{address}</p>
          <p className="pt-1.5 text-[13px] text-gray-400">{categoryName}</p>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantItem;
