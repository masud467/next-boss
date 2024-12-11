import React from "react";
const getPostsDetails = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`);
  const data = await res.json();
  return data;
};
export const generateMetadata = async ({ params }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts/${params.id}`
  );
  const postData = await res.json();
  return {
    title: {
      absolute: `${postData.title}`,
    },
    description: postData.body,
    keywords: postData.body.split(" "),
  };
};
const Page = async ({ params }) => {
  const { title, body } = await getPostsDetails(params.id);
  return (
    <div>
      <h4>Title: {title}</h4>
      <h4>Description: {body}</h4>
    </div>
  );
};

export default Page;
