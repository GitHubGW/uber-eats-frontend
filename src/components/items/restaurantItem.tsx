import { Link } from "react-router-dom";

interface RestaurantItemProps {
  id: number;
  name: string;
  address: string;
  imageUrl: string;
  isPromoted: boolean;
  promotedUntilDate?: any;
  categoryName: string;
}

const RestaurantItem = ({ id, name, address, imageUrl, isPromoted, promotedUntilDate, categoryName }: RestaurantItemProps) => {
  return (
    <div className="cursor-pointer">
      <Link to={`/restaurants/${name}`}>
        <div className="h-64 overflow-hidden relative">
          <img src={imageUrl} alt="" className="w-full" />
          {isPromoted === true ? <img src="/images/icon_promo.png" alt="" className="w-8 h-8 z-50 absolute top-2 right-2" /> : null}
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
