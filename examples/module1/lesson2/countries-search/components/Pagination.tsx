interface PaginationProps {}

function Pagination({
  currentPage,
  setCurrentPage,
  totalPages,
}: {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
}) {
  const handlePrevouis = () => {
    setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={handlePrevouis}
        disabled={currentPage === 1}
        className="px-4 py-2 m-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
      >
        Previous
      </button>
      <span className="self-center">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-4 py-2 m-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
      >
        Next
      </button>
    </div>
  );
}
export default Pagination;
