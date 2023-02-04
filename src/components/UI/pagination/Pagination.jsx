import React from "react";
import { usePagination } from "../../../hooks/usePagination";

const Pagination = ({totalPages, currentPage, setPage}) => {
const pages = usePagination(totalPages);
  return (
    <div className={"page__wrapper"}>
      {pages.map((page_number) => (
        <span
          className={page_number === currentPage ? "page page__current" : "page"}
          key={page_number}
          onClick={() => {
            setPage(page_number);
          }}
        >
          {page_number}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
