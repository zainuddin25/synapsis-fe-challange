"use client";
import Table from "@/components/Table";
import ModalCreateUser from "@/components/user/ModalCreate";
import { limitData } from "@/helper/limitData";
import { fetchUsers } from "@/lib/action/user";
import { addUser, deleteDataUser, updateUser } from "@/lib/features/user";
import { RootState, useAppDispatch } from "@/lib/store";
import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const apiUrl = process.env.API_URL;
const token = process.env.AUTH_TOKEN;

const UsersPage = () => {
  const [type, setType] = useState<string>("");
  const [userId, setUserId] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [gender, setGender] = useState<string>("male");
  const [status, setStatus] = useState<string>("active");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [startData, setStartData] = useState<number>(0);
  const [endData, setEndData] = useState<number>(9);
  const dispatch = useAppDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.user.value
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (type == "create") {
        const data = {
          email,
          name,
          gender,
          status,
        };
        const response = await axios.post(`${apiUrl}/users`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status == 201) {
          const data = {
            id: response.data.id,
            name: response.data.name,
            email: response.data.email,
            gender: response.data.gender,
            status: response.data.status,
          };

          dispatch(addUser(data));
          setIsOpen(false);
          setName("");
          setEmail("");
          setGender("male");
          setStatus("active");
          Swal.fire({
            icon: "success",
            title: "Create Success",
            text: `${response.data.name} has been created`,
          });
        }
      } else if (type == "edit") {
        const data = {
          id: userId,
          email,
          name,
          gender,
          status,
        };
        dispatch(updateUser(data));
        Swal.fire({
          icon: "success",
          title: "Update Success",
          text: `${name} has been updated`,
        });
        setIsOpen(false);
        setName("");
        setEmail("");
        setGender("male");
        setStatus("active");
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

  const deleteUser = (id: number) => {
    try {
      dispatch(deleteDataUser(id));
      Swal.fire({
        icon: "success",
        title: "Delete Success",
        text: `Data success deleted from table`,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Internal server error`,
      });
    }
  };

  const changeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const changeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const changeGender = (event: ChangeEvent<HTMLSelectElement>) => {
    setGender(event.target.value);
  };

  const changeStatus = (event: ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value);
  };

  const openCreateModal = () => {
    setIsOpen(true);
    setType("create");
  };

  const openDetail = (id: number) => {
    setIsOpen(true);
    setType("detail");
    const detailUser = data.find((result) => result.id == id);
    if (detailUser) {
      setName(detailUser.name);
      setEmail(detailUser.email);
      setGender(detailUser.gender);
      setStatus(detailUser.status);
    }
  };

  const openEdit = (id: number) => {
    setUserId(id);
    setIsOpen(true);
    setType("edit");
    const detailUser = data.find((result) => result.id == id);
    if (detailUser) {
      setName(detailUser.name);
      setEmail(detailUser.email);
      setGender(detailUser.gender);
      setStatus(detailUser.status);
    }
  };

  const cancelEdit = () => {
    setIsOpen(false);
    setType("edit");
    setName("");
    setEmail("");
    setGender("male");
    setStatus("active");
  };

  const handleClose = () => {
    setIsOpen(false);
    setName("");
    setEmail("");
    setGender("male");
    setStatus("active");
  };

  return (
    <div className="w-full">
      <div className="flex mb-4 justify-between items-center">
        <h1 className="text-base lg:text-xl font-bold text-white">All Users</h1>
        <button
          className="px-4 lg:px-6 py-1.5 lg:py-2 text-xs lg:text-sm text-white bg-blue-500 rounded-xl"
          onClick={openCreateModal}
        >
          Create new user
        </button>
      </div>
      {loading ? (
        <div className="w-full h-96 flex justify-center items-center">
          <h1 className="text-white">Loading...</h1>
        </div>
      ) : (
        <Table
          data={limitData({ data, start: startData, end: endData })}
          openDetail={openDetail}
          openEdit={openEdit}
          deleteUser={deleteUser}
        />
      )}
      {isOpen && (
        <ModalCreateUser
          type={type}
          name={name}
          email={email}
          gender={gender}
          status={status}
          changeName={changeName}
          changeEmail={changeEmail}
          changeGender={changeGender}
          changeStatus={changeStatus}
          onSubmit={handleSubmit}
          handleClose={handleClose}
          handleCancelEdit={cancelEdit}
        />
      )}
    </div>
  );
};

export default UsersPage;
