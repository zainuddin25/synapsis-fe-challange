"use client";
import Table from "@/components/Table";
import { limitData } from "@/helper/limitData";
import { fetchUsers } from "@/lib/action/user";
import { addUser } from "@/lib/features/user";
import { RootState, useAppDispatch } from "@/lib/store";
import { UserTypes } from "@/types";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const UsersPage = () => {
  const [startData, setStartData] = useState<number>(0);
  const [endData, setEndData] = useState<number>(9);
  const dispatch = useAppDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.user.value
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="w-full">
      <div className="flex mb-4">
        <h1 className="text-base lg:text-xl font-bold text-white">All Users</h1>
      </div>
      {loading ? (
        <div className="w-full h-96 flex justify-center items-center">
          <h1 className="text-white">Loading...</h1>
        </div>
      ) : (
        <Table data={limitData({ data, start: startData, end: endData })} />
      )}
    </div>
  );
};

export default UsersPage;
