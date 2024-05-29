import { useLoaderData } from "react-router-dom";
import { PostType } from "../type/postType";
import { FC } from "react";
import { ParamsType } from "../type/paramsType";

export const loader = async ({ params }: { params: ParamsType }) => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.postId}`
    );
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const post: PostType = await res.json();
    return { post };
  } catch (err) {
    console.log("Err");
    return { post: [] };
  }
};

export const Post: FC = () => {
  const { post } = useLoaderData() as { post: PostType | null };
  return (
    <div className="flex flex-col ml-3">
      <h1 className="h1-base">Single Post</h1>
      <div>
        <p>{post?.id}</p>
        <p>{post?.title}</p>
        <p>{post?.body}</p>
      </div>
    </div>
  );
};
