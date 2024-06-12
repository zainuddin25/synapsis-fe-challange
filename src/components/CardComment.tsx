import React from "react";

type Props = {
  name: string;
  email: string;
  body: string;
};

const CardComment = ({ name, email, body }: Props) => {
  return (
    <div className="w-full p-4 border border-white/10 rounded-md duration-200">
      <div className="w-full">
        <h1 className="text-lg font-semibold text-white tracking-wider">
          {name}
        </h1>
        <p className="text-xs text-white/50">{email}</p>
        <div className="mt-4">
          <p className="font-medium text-white">{body}</p>
        </div>
      </div>
    </div>
  );
};

export default CardComment;
