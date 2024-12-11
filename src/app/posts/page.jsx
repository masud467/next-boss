import { getPosts } from "@/services/postApi";
import Link from "next/link";

import React from "react";

const Page = async () => {
  const postsData = await getPosts();

  return (
    <div className="pb-5 px-5">
      <h4>All Posts</h4>
      <div className="grid grid-cols-4 gap-6">
        {postsData?.slice(0, 20)?.map(({ title, body, id }) => (
          <div key={id} className="border-2 p-6 flex flex-col justify-between">
            <h4>
              <span className="font-bold">Title:</span> {title}
            </h4>
            <p>
              <span className="font-bold">Description:</span> {body}
            </p>
            <button className="bg-[#B91C1C] px-4 py-2 rounded-md text-white">
              <Link href={`/posts/${id}`}>see details</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
