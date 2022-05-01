import Loading from "../loading";
import CategoryItem from "./categoryItem";

interface CategoryItemsProps {
  loading: boolean;
  category: any;
}

const CategoryItems = ({ loading, category }: CategoryItemsProps) => {
  return (
    <div className="flex justify-center items-center border-b">
      <div className="flex justify-center items-center px-4 py-4 w-full lg:w-[800px] h-28">
        {loading === true ? (
          <Loading size="w-6" />
        ) : (
          <>
            {category?.map((category: any) => (
              <CategoryItem key={category.id} name={category.name} imageUrl={category.imageUrl} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default CategoryItems;
