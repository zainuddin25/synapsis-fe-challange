import React from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

type Props = {
  currentPage: number;
  isEnd?: boolean;
  nextPage: () => void;
  prevPage: () => void;
};

const Pagination = ({ currentPage, isEnd, nextPage, prevPage }: Props) => {
  return (
    <div className="w-full flex justify-center items-center gap-4 lg:gap-6">
      <button
        className={`border p-1 lg:p-2 rounded-md outline-none ${
          currentPage == 0 ? "border-white/20" : "border-white/50"
        }`}
        onClick={prevPage}
      >
        <ChevronLeft color={currentPage == 0 ? "gray" : "white"} />
      </button>
      <button
        className={`border p-1 lg:p-2 ${
          isEnd ? "border-white/20" : "border-white/50"
        } rounded-md outline-none`}
        onClick={nextPage}
        disabled={isEnd}
      >
        <ChevronRight color={isEnd ? "gray" : "white"} />
      </button>
    </div>
  );
};

export default Pagination;
