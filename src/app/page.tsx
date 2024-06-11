"use client";
import CardBlog from "@/components/CardBlog";
import ModalCreate from "@/components/ModalCreate";
import Pagination from "@/components/Pagination";
import { BlogTypes } from "@/types";
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";

const apiUrl = process.env.API_URL;

const Home = () => {
  const [data, setData] = useState<BlogTypes[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

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

  const changeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const changeBody = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(event.target.value);
  };

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
    <div className="w-full">
      <div className="flex justify-between items-center my-8">
        <h1 className="text-xl font-bold text-white">All Blogs</h1>
        <button
          className="bg-blue-500 text-sm px-6 py-2 rounded-xl text-white"
          onClick={() => setOpenModal(true)}
        >
          Create New Post
        </button>
      </div>
      {isLoading ? (
        <div className="w-full h-96 flex justify-center items-center">
          <h1 className="text-white">Loading...</h1>
        </div>
      ) : (
        <>
          <div className=" grid grid-cols-3 gap-6 w-full">
            {data.map((result) => (
              <CardBlog
                key={result.id}
                title={result.title}
                body={result.body}
                user_id={result.user_id}
              />
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
      {openModal && (
        <ModalCreate
          title={title}
          body={body}
          changeTitle={changeTitle}
          changeBody={changeBody}
          handleClose={() => setOpenModal(false)}
        />
      )}
    </div>
  );
};

export default Home;
