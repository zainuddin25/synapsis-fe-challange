import { UserTypes } from "@/types";

type Props = {
  data: UserTypes[];
  openDetail: (_id: number) => void;
  openEdit: (_id: number) => void;
  deleteUser: (_id: number) => void;
};

const Table = ({ data, openDetail, openEdit, deleteUser }: Props) => {
  return (
    <div className="overflow-x-auto border rounded-xl" id="container-table">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="py-4 px-4 border-b text-white font-normal text-start">
              ID
            </th>
            <th className="py-4 px-4 border-b text-white font-normal text-start">
              Name
            </th>
            <th className="py-4 px-4 border-b text-white font-normal text-start">
              Email
            </th>
            <th className="py-4 px-4 border-b text-white font-normal">
              Gender
            </th>
            <th className="py-4 px-4 border-b text-white font-normal">
              Status
            </th>
            <th className="py-4 px-4 border-b text-white font-normal">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((result) => (
            <tr key={result.id}>
              <td className="py-2 px-4 border-b text-white h-14">
                {result.id}
              </td>
              <td className="py-2 px-4 border-b text-white h-14 truncate w-full">
                {result.name}
              </td>
              <td className="py-2 px-4 border-b text-white h-14 truncate">
                {result.email}
              </td>
              <td
                className="py-2 px-4 border-b text-white h-14 capitalize"
                align="center"
              >
                {result.gender}
              </td>
              <td className="py-2 px-4 border-b text-white h-14" align="center">
                <p
                  className={`p-3 py-1 ${
                    result.status == "active" ? "bg-blue-500" : "bg-slate-500"
                  } text-sm capitalize rounded-full`}
                >
                  {result.status}
                </p>
              </td>
              <td className="py-2 px-4 border-b">
                <div className="w-full flex justify-center items-center">
                  <button
                    className="text-xs lg:text-sm bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 lg:px-6 py-1.5 lg:py-2 rounded mr-2"
                    onClick={() => openDetail(result.id)}
                  >
                    Detail
                  </button>
                  <button
                    className="text-xs lg:text-sm bg-red-500 hover:bg-red-700 text-white font-semibold px-4 lg:px-6 py-1.5 lg:py-2 rounded mr-2"
                    onClick={() => deleteUser(result.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="text-xs lg:text-sm bg-green-500 hover:bg-green-700 text-white font-semibold px-4 lg:px-6 py-1.5 lg:py-2 rounded mr-2"
                    onClick={() => openEdit(result.id)}
                  >
                    Edit
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
