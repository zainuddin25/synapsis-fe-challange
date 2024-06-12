"use client";
import CardComment from "@/components/CardComment";
import { BlogTypes, CommentTypes } from "@/types";
import axios from "axios";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

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
        console.log(error);
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
      console.log(error);
    }
  };

  return (
    <div className="w-full my-8 flex justify-center">
      {isLoading ? (
        <div className="w-full h-96 flex justify-center items-center">
          <h1 className="text-white">Loading...</h1>
        </div>
      ) : (
        <div className="w-[40%]">
          <h1 className="text-2xl font-bold text-white">{data?.title}</h1>
          <p className="text-white/80 my-6">{data?.body}</p>
          <div className="w-2/4 mx-auto">
            <button
              className={`w-full py-2 border border-white/20 rounded-md text-white/20 text-sm font-medium ${
                openComment ? "cursor-not-allowed" : "cursor-pointer"
              }`}
              onClick={handleLoadCommnet}
              disabled={openComment}
            >
              Load Comment
            </button>
          </div>
          <div className="w-full mt-8">
            {openComment && commentsData.length == 0 ? (
              <div className="w-full h-40 flex justify-center items-center border border-white/10 rounded-md">
                <p className="text-white">Comment not found</p>
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