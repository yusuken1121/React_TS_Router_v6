import { FC } from "react";
import { PostType } from "../type/postType";
import { useLoaderData } from "react-router-dom";
export const loader = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const posts: Array<PostType> = await res.json();
    return { posts };
  } catch (err) {
    console.log("Err");
    return { posts: [] };
  }
};

export const Posts: FC = () => {
  const { posts } = useLoaderData();
  console.log(posts);
  return (
    <>
      <h1 className="h1-base">Posts</h1>
      <ul>
        {posts.map((post: PostType) => {
          return (
            <li key={post.id}>
              <p className="font-bold">{post.title}: </p>
              <p>{post.body}</p>

              <br />
            </li>
          );
        })}
      </ul>
    </>
  );
};
