import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

interface PaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}

const Pagination = ({ page, setPage, totalPages }: PaginationProps) => {
  const handleSetPage = (page: number) => {
    setPage(page);
  };

  const handleSetPrevPage = () => {
    if (page === 1) {
      return;
    }
    setPage((page) => page - 1);
  };

  const handleSetNextPage = () => {
    if (page === totalPages) {
      return;
    }
    setPage((page) => page + 1);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center py-8 w-[800px]">
        <button
          type="button"
          onClick={() => handleSetPage(1)}
          disabled={page === 1}
          className={`${page === 1 ? "cursor-no-drop" : ""} py-2 px-2.5 border border-black hover:bg-gray-50 mr-4`}
        >
          첫 페이지
        </button>
        <button type="button" onClick={handleSetPrevPage} disabled={page === 1} className={`${page === 1 ? "cursor-no-drop" : ""} mr-5  `}>
          <HiOutlineChevronLeft size={24} />
        </button>
        {totalPages === 1 ? (
          <div>1</div>
        ) : (
          <div className="flex space-x-5">
            {Array.from({ length: totalPages as number }).map((value, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleSetPage(Number(index + 1))}
                className={`${page === Number(index + 1) ? "underline text-green-500" : ""} text-lg font-medium hover:underline`}
              >
                {Number(index + 1)}
              </button>
            ))}
          </div>
        )}
        <button type="button" onClick={handleSetNextPage} disabled={page === totalPages} className={`${page === totalPages ? "cursor-no-drop" : ""} ml-5`}>
          <HiOutlineChevronRight size={24} />
        </button>
        <button
          type="button"
          onClick={() => handleSetPage(totalPages as number)}
          disabled={page === totalPages}
          className={`${page === totalPages ? "cursor-no-drop" : ""} py-2 px-2.5 bg-black hover:bg-gray-900 text-white ml-4`}
        >
          마지막 페이지
        </button>
      </div>
    </div>
  );
};

export default Pagination;
