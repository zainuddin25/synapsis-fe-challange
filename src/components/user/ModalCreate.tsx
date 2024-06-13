import React, { ChangeEvent } from "react";
import { X } from "react-feather";

type Props = {
  type: string;
  name: string;
  email: string;
  gender: string;
  status: string;
  changeName: (_event: ChangeEvent<HTMLInputElement>) => void;
  changeEmail: (_event: ChangeEvent<HTMLInputElement>) => void;
  changeGender: (_event: ChangeEvent<HTMLSelectElement>) => void;
  changeStatus: (_event: ChangeEvent<HTMLSelectElement>) => void;
  onSubmit: (_event: ChangeEvent<HTMLFormElement>) => void;
  handleClose: () => void;
  handleCancelEdit: () => void;
};

const ModalCreateUser = ({
  type,
  name,
  email,
  gender,
  status,
  changeName,
  changeEmail,
  changeGender,
  changeStatus,
  onSubmit,
  handleClose,
  handleCancelEdit,
}: Props) => {
  return (
    <div className="w-screen h-screen bg-black/20 backdrop-blur-sm fixed top-0 left-0 flex justify-center items-center">
      <div className="w-[90%] lg:w-1/3 bg-white rounded-md px-4 py-3">
        <div className="flex justify-between items-center">
          <h1>Create new user</h1>
          <button
            className="p-1 lg:p-2 border rounded-md"
            onClick={handleClose}
          >
            <X size={18} />
          </button>
        </div>
        <hr className="my-3 lg:my-4" />
        <form className="w-full" onSubmit={onSubmit}>
          <div className="flex flex-col gap-2 my-4">
            <p className="text-xs text-black/50 font-semibold uppercase">
              Email
            </p>
            <input
              placeholder="Input email..."
              className="border w-full px-3 py-2 text-sm outline-none rounded-md"
              value={email}
              onChange={changeEmail}
              disabled={type == "detail"}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs text-black/50 font-semibold uppercase">
              Username
            </p>
            <input
              placeholder="Input username..."
              className="border w-full px-3 py-2 text-sm outline-none rounded-md"
              value={name}
              onChange={changeName}
              disabled={type == "detail"}
            />
          </div>
          <div className="flex flex-col gap-2 my-4">
            <p className="text-xs text-black/50 font-semibold uppercase">
              Gender
            </p>
            <select
              className="px-3 py-2 text-sm border w-full outline-none rounded-md"
              value={gender}
              onChange={changeGender}
              disabled={type == "detail"}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 my-4">
            <p className="text-xs text-black/50 font-semibold uppercase">
              Status
            </p>
            <select
              className="px-3 py-2 text-sm border w-full outline-none rounded-md"
              value={status}
              onChange={changeStatus}
              disabled={type == "detail"}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div className="flex justify-end items-center gap-2 mt-4">
            {type == "create" ? (
              <>
                <button
                  className="px-4 lg:px-6 py-1.5 lg:py-2 border text-xs lg:text-sm rounded-md"
                  type="button"
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button className="px-4 lg:px-6 py-1.5 lg:py-2 text-xs lg:text-sm rounded-md bg-blue-500 text-white">
                  Submit
                </button>
              </>
            ) : type == "detail" ? (
              <>
                <button
                  className="px-4 lg:px-6 py-1.5 lg:py-2 border text-xs lg:text-sm rounded-md"
                  type="button"
                  onClick={handleClose}
                >
                  Close
                </button>
              </>
            ) : type == "edit" ? (
              <>
                <button
                  className="px-4 lg:px-6 py-1.5 lg:py-2 border text-xs lg:text-sm rounded-md"
                  type="button"
                  onClick={handleCancelEdit}
                >
                  Cancel
                </button>
                <button className="px-4 lg:px-6 py-1.5 lg:py-2 text-xs lg:text-sm rounded-md bg-blue-500 text-white">
                  Save
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

export default ModalCreateUser;
