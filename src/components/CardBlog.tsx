import Link from "next/link";
import { ChevronRight } from "react-feather";

type Props = {
  user_id: number;
  title: string;
  body: string;
};

const CardBlog = ({ user_id, title, body }: Props) => {
  return (
    <Link href={`/post/${user_id}`}>
      <div className="w-full bg-white/10 p-4 border border-white/30 rounded-md hover:bg-white/50 duration-200 flex flex-col gap-2">
        <div className="flex gap-4 justify-between items-center">
          <h1
            className="text-lg font-bold text-white truncate"
            style={{
              width: "calc(100% - 20px)",
            }}
          >
            {title}
          </h1>
          <div className="w-5 h-5">
            <ChevronRight size={20} color="white" />
          </div>
        </div>
        <p className="text-sm font-medium text-white/80 line-wrap-line">
          {body}
        </p>
        <p className="text-sm font-light text-white text-white/80">
          Created By:{" "}
          <span className="underline text-white font-medium">{user_id}</span>
        </p>
      </div>
    </Link>
  );
};

export default CardBlog;
