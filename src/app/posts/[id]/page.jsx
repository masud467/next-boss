import React from 'react';
const getPostsDetails = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json()
  return data
}
const Page = async ({params}) => {
  const {title,body} = await getPostsDetails(params.id)
  return (
    <div>
      <h4>
        Title: {title}
      </h4>
      <h4>
        Description: {body}
      </h4>
    </div>
  );
}

export default Page;
