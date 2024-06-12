import { ChangeEvent } from "react";
import { X } from "react-feather";

type Props = {
  title: string;
  body: string;
  type: string;
  changeTitle: (_event: ChangeEvent<HTMLInputElement>) => void;
  changeBody: (_event: ChangeEvent<HTMLTextAreaElement>) => void;
  handleClose: () => void;
  handleSubmit: (_event: ChangeEvent<HTMLFormElement>) => void;
  handleOpenEdit: () => void;
  handleCanceleEdit: () => void;
  handleDeleteBlog: () => void;
};

const ModalCreate = ({
  title,
  body,
  type,
  changeTitle,
  changeBody,
  handleClose,
  handleSubmit,
  handleOpenEdit,
  handleCanceleEdit,
  handleDeleteBlog,
}: Props) => {
  return (
    <div className="h-screen w-screen bg-black/20 backdrop-blur-sm fixed top-0 left-0 flex justify-center items-center">
      <div className="w-1/3 bg-white rounded-md px-4 py-3">
        <div className="flex justify-between items-center">
          <h1 className="text-lg">Create New Blog</h1>
          <button className="p-2 border rounded-md" onClick={handleClose}>
            <X size={18} />
          </button>
        </div>
        <hr className="my-4" />
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <p className="text-xs text-black/50 font-semibold uppercase">
              Blog Title
            </p>
            <input
              placeholder="Input blog title..."
              className="border w-full px-3 py-2 text-sm outline-none rounded-md"
              value={title}
              onChange={changeTitle}
              disabled={type == "detail"}
            />
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <p className="text-xs text-black/50 font-semibold uppercase">
              Body
            </p>
            <textarea
              className="border w-full px-3 py-2 text-sm outline-none rounded-md h-40"
              placeholder="Input blog body..."
              value={body}
              onChange={changeBody}
              disabled={type == "detail"}
            ></textarea>
          </div>
          <div className="flex justify-end items-center gap-2 mt-4">
            {type == "create" ? (
              <>
                <button
                  className="px-6 py-2 border text-sm rounded-md"
                  type="button"
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button className="px-6 py-2 text-sm rounded-md bg-blue-500 text-white">
                  Submit
                </button>
              </>
            ) : type == "detail" ? (
              <>
                <button
                  className="px-6 py-2 border text-sm rounded-md"
                  type="button"
                  onClick={handleClose}
                >
                  Close
                </button>
                <button
                  className="px-6 py-2 text-sm rounded-md bg-red-500 text-white"
                  type="button"
                  onClick={handleDeleteBlog}
                >
                  Delete
                </button>
                <button
                  className="px-6 py-2 text-sm rounded-md bg-blue-500 text-white"
                  type="button"
                  onClick={handleOpenEdit}
                >
                  Edit
                </button>
              </>
            ) : type == "edit" ? (
              <>
                <button
                  className="px-6 py-2 border text-sm rounded-md"
                  type="button"
                  onClick={handleCanceleEdit}
                >
                  Cancel
                </button>
                <button className="px-6 py-2 text-sm rounded-md bg-blue-500 text-white">
                  Submit
                </button>
              </>
            ) : (
              <></>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalCreate;
