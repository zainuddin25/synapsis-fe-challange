"use client";
import CardComment from "@/components/CardComment";
import { BlogTypes, CommentTypes } from "@/types";
import axios from "axios";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const apiUrl = process.env.API_URL;

const DetailPage = () => {
  const [data, setData] = useState<BlogTypes | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [commentsData, setCommentsData] = useState<CommentTypes[]>([]);
  const [openComment, setOpenComment] = useState<boolean>(false);
  const pathname = usePathname();
  const id = pathname.split("/")[2];

  useEffect(() => {
    const fetchDetail = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${apiUrl}/posts/${id}`);

        if (response.status == 200) {
          setData(response.data);
          setIsLoading(false);
          setOpenComment(false);
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `Error ${error.response?.data[0].field} ${error.response?.data[0].message}`,
          });
        }
      }
    };

    fetchDetail();
  }, [id]);

  const handleLoadCommnet = async () => {
    try {
      const response = await axios.get(`${apiUrl}/posts/${id}/comments`);
      if (response.status == 200) {
        setOpenComment(true);
        setCommentsData(response.data);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Error ${error.response?.data[0].field} ${error.response?.data[0].message}`,
        });
      }
    }
  };

  return (
    <div className="w-full my-4 lg:my-8 flex justify-center">
      {isLoading ? (
        <div className="w-full h-96 flex justify-center items-center">
          <h1 className="text-white">Loading...</h1>
        </div>
      ) : (
        <div className="w-[80%] lg:w-[40%]">
          <h1 className="text-xl lg:text-2xl font-bold text-white">
            {data?.title}
          </h1>
          <p className="text-sm lg:text-base text-white/80 my-2 lg:my-6">
            {data?.body}
          </p>
          <div className="w-2/4 mx-auto mt-6 lg:mt-0">
            <button
              className={`w-full py-1.5 lg:py-2 border border-white/20 rounded-md text-white/20 text-xs lg:text-sm font-medium ${
                openComment ? "cursor-not-allowed" : "cursor-pointer"
              }`}
              onClick={handleLoadCommnet}
              disabled={openComment}
            >
              Load Comment
            </button>
          </div>
          <div className="w-full mt-8 flex flex-col gap-2">
            {openComment && commentsData.length == 0 ? (
              <div className="w-full h-40 flex justify-center items-center border border-white/10 rounded-md">
                <p className="text-white text-sm lg:text-base">
                  Comment not found
                </p>
              </div>
            ) : (
              commentsData.map((result) => (
                <CardComment
                  key={result.id}
                  name={result.name}
                  email={result.email}
                  body={result.body}
                />
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
