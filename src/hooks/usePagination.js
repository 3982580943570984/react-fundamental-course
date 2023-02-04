import { useMemo } from "react";

export const usePagination = (totalPages) => {
  const pages = useMemo(() => {
    let sub_array = [];
    for (let i = 0; i < totalPages; i++) {
      sub_array.push(i + 1);
    }
    return sub_array;
  }, [totalPages]);

  return pages;
};
