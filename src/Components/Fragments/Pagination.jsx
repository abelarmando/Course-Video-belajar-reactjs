function Pagination({ totalPost, postsPerPage, setCurrentPage, CurrentPage }) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
    pages.push(i);
  }

  const HandleClikeDecrement = () => {
    if (CurrentPage > 1 && CurrentPage <= pages.length) {
      setCurrentPage(CurrentPage - 1);
    }
  };

  const HandleClikeIncrement = () => {
    if (CurrentPage < pages.length) {
      setCurrentPage(CurrentPage + 1);
    }
  };

  return (
    <div className="flex gap-2 justify-end">
      <img
        src="/images/Icon/Icon/Pagination/Left_Vector.svg"
        alt=""
        className="bg-[#F4F5FA] p-2 rounded-sm cursor-pointer"
        onClick={() => HandleClikeDecrement()}
      />
      {pages.map((page, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(page)}
          className={` p-2 rounded-sm ${
            CurrentPage === page ? "bg-[#FFBD3A]" : ""
          }`}
        >
          {page}
        </button>
      ))}
      <img
        src="/images/Icon/Icon/Pagination/Right_Vector.svg"
        alt=""
        className="bg-[#F4F5FA] p-2 rounded-sm cursor-pointer"
        onClick={() => HandleClikeIncrement()}
      />
    </div>
  );
}

export default Pagination;
