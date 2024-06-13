"use client";
import CardBlog from "@/components/CardBlog";
import ModalCreate from "@/components/ModalCreate";
import { addBlog, deleteBlog, updateBlog } from "@/lib/features/blog";
import { RootState } from "@/lib/store";
import { BlogTypes } from "@/types";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

const apiUrl = process.env.API_URL;
const user_id = process.env.USER_ID;
const token = process.env.AUTH_TOKEN;

const MyBlogsPage = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [blogId, setBlogId] = useState<number>(0);
  const [typeModal, setTypeModal] = useState<string>("");
  const createdData = useSelector((state: RootState) => state.blog.value);
  const data = createdData;
  const dispatch = useDispatch();

  const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (typeModal == "edit") {
        if (title == "") {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Error title can't be blank",
          });
        } else if (body == "") {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Error body can't be blank",
          });
        } else if (body.length > 500) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Error body is too long (maximum is 500 characters)",
          });
        } else {
          const data = {
            id: blogId,
            title,
            body,
          };
          dispatch(updateBlog(data));
          setIsOpenModal(false);
          setTitle("");
          setBody("");
          setBlogId(0);
          setTypeModal("");
        }
      } else {
        const data = {
          title,
          body,
        };
        const response = await axios.post(
          `${apiUrl}/users/${user_id}/posts`,
          data,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status == 201) {
          setIsOpenModal(false);
          setTitle("");
          setBody("");
          setTypeModal("");
          const data: BlogTypes = {
            id: response.data.id,
            user_id: response.data.user_id,
            title: response.data.title,
            body: response.data.body,
          };
          dispatch(addBlog(data));
        }
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

  // Open modal create
  const handleOpenModal = () => {
    setIsOpenModal(true);
    setTypeModal("create");
  };

  // Open modal detail
  const handleOpenDetail = (id: number) => {
    setIsOpenModal(true);
    setTypeModal("detail");
    const detailData = data.find((item) => item.id == id);
    if (detailData) {
      setTitle(detailData.title);
      setBody(detailData.body);
      setBlogId(detailData.id);
    }
  };

  // Handle cancel edit
  const handleCanceleEdit = () => {
    setTypeModal("detail");
    const detailData = data.find((item) => item.id == blogId);
    if (detailData) {
      setTitle(detailData.title);
      setBody(detailData.body);
    }
  };

  // Close modal
  const handleClose = () => {
    setIsOpenModal(false);
    setTitle("");
    setBody("");
    setBlogId(0);
  };

  // Handle delete blog
  const handleDeleteBlog = () => {
    Swal.fire({
      icon: "success",
      title: "Delete Success",
      text: "Blog has been deleted",
    });
    dispatch(deleteBlog(blogId));
    setIsOpenModal(false);
    setTitle("");
    setBody("");
    setBlogId(0);
    setTypeModal("");
  };

  const changeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const changeBody = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(event.target.value);
  };

  return (
    <div className="w-full">
      <div className="flex mb-4 justify-between items-center">
        <h1 className="text-base lg:text-xl font-bold text-white">My Blogs</h1>
        <button
          className="px-4 lg:px-6 py-1.5 lg:py-2 text-xs lg:text-sm text-white bg-blue-500 rounded-xl"
          onClick={handleOpenModal}
        >
          Create new blog
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {data.length == 0 ? (
          <div className="h-96 w-full flex justify-center items-center col-span-3">
            <p className="text-white">Data Empety</p>
          </div>
        ) : (
          data.map((result) => (
            <CardBlog
              key={result.id}
              post_id={result.id}
              title={result.title}
              body={result.body}
              user_id={result.user_id}
              isCreatePage
              openDetail={handleOpenDetail}
            />
          ))
        )}
      </div>
      {isOpenModal && (
        <ModalCreate
          title={title}
          body={body}
          type={typeModal}
          changeTitle={changeTitle}
          changeBody={changeBody}
          handleClose={handleClose}
          handleSubmit={handleSubmit}
          handleOpenEdit={() => setTypeModal("edit")}
          handleCanceleEdit={handleCanceleEdit}
          handleDeleteBlog={handleDeleteBlog}
        />
      )}
    </div>
  );
};

export default MyBlogsPage;
