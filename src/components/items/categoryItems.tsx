import Loading from "../loading";
import CategoryItem from "./categoryItem";

interface Category {
  __typename?: "Category" | undefined;
  id: number;
  name: string;
  imageUrl: string;
  totalRestaurants: number;
}

interface CategoryItemsProps {
  loading: boolean;
  category: Category[] | null | undefined;
}

const CategoryItems = ({ loading, category }: CategoryItemsProps) => {
  return (
    <div className="flex justify-center items-center border-b">
      <div className="flex justify-center items-center px-4 py-4 w-full lg:w-[800px] h-28">
        {loading === true ? (
          <Loading size="w-6" />
        ) : (
          <>
            {category?.map((category) => (
              <CategoryItem key={category.id} name={category.name} imageUrl={category.imageUrl} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default CategoryItems;
