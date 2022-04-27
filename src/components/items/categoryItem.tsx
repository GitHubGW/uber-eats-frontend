import { Link } from "react-router-dom";

interface CategoryItemProps {
  name: string;
  imageUrl: string;
}

const CategoryItem = ({ name, imageUrl }: CategoryItemProps) => {
  return (
    <div className="text-center group cursor-pointer flex flex-col justify-center items-center w-48">
      <Link to={`/category/${name}`}>
        <img src={imageUrl} alt="" className="w-16 h-16 rounded-full group-hover:bg-gray-200 p-1.5" />
        <span className="font-medium mt-1 text-sm">{name}</span>
      </Link>
    </div>
  );
};

export default CategoryItem;
