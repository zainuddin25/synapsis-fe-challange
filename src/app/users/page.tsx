"use client";
import Table from "@/components/Table";
import { UserTypes } from "@/types";
import axios from "axios";
import React, { useEffect, useState } from "react";

const apiUrl = process.env.API_URL;

const UsersPage = () => {
  const [data, setData] = useState<UserTypes[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const perPage = 10;

  const usersData = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      gender: "Male",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "jane@example.com",
      gender: "Female",
      status: "Inactive",
    },
  ];

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${apiUrl}/users?page=${page}&per_page=${perPage}`
        );
        if (response.status == 200) {
          setData(response.data);
          setIsLoading(false);
        }
      } catch (error) {}
    };

    fetchUsers();
  }, [page, perPage]);

  return (
    <div className="w-full">
      <div className="flex mb-4">
        <h1 className="text-base lg:text-xl font-bold text-white">All Users</h1>
      </div>
      {isLoading ? (
        <div className="w-full h-96 flex justify-center items-center">
          <h1 className="text-white">Loading...</h1>
        </div>
      ) : (
        <Table data={data} />
      )}
    </div>
  );
};

export default UsersPage;
