import React from "react";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  lastPostIndex,
  currentPage,
}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="pagination">
      <div className="container">
        {currentPage !== 1 && <button onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>}
        {pages?.map((page, index) => {
          return (
            <button key={index} onClick={() => setCurrentPage(page)} className={currentPage == page ? "active" : ""}>
              {page}
            </button>
          );
        })}
        {lastPostIndex !== totalPosts && <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>}
      </div>
    </div>
  );
};

export default Pagination;
