import { getPosts } from "@/services/postApi";
import React from "react";

const Page = async () => {
  const postsData = await getPosts();
  console.log(postsData);
  return (
    <div className="pb-5 px-5">
      <h4>All Posts</h4>
      <div className="grid grid-cols-4 gap-6">
        {postsData?.slice(0, 20)?.map((post) => (
          <div key={post.id} className="border-2 p-6">
            <h4>
              <span className="font-bold">Title:</span> {post.title}
            </h4>
            <p>
              <span className="font-bold">Description:</span> {post.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
