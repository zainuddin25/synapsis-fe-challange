"use client";
import CardBlog from "@/components/CardBlog";
import Pagination from "@/components/Pagination";
import { addBlog } from "@/lib/features/blog";
import { RootState } from "@/lib/store";
import { BlogTypes } from "@/types";
import axios from "axios";
import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const apiUrl = process.env.API_URL;

const Home = () => {
  const [data, setData] = useState<BlogTypes[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const blogData = useSelector((state: RootState) => state.blog);

  useEffect(() => {
    const fetchBlog = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${apiUrl}/posts?page=${page}&per_page=9`
        );

        if (response.status == 200) {
          setData(response.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlog();
  }, [page]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page == 0) {
      setPage(0);
    } else {
      setPage(page - 1);
    }
  };

  return (
    <div className="w-full mb-10">
      <div className="flex justify-between items-center my-8">
        <h1 className="text-xl font-bold text-white">All Blogs</h1>
      </div>
      {isLoading ? (
        <div className="w-full h-96 flex justify-center items-center">
          <h1 className="text-white">Loading...</h1>
        </div>
      ) : (
        <>
          <div className=" grid grid-cols-3 gap-6 w-full">
            {data.map((result) => (
              <Link href={`/blog/${result.id}`} key={result.id}>
                <CardBlog
                  title={result.title}
                  body={result.body}
                  user_id={result.user_id}
                />
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Pagination
              currentPage={page}
              nextPage={handleNextPage}
              prevPage={handlePrevPage}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
