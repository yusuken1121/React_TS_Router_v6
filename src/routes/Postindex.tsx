import { Link, LoaderFunction, useLoaderData } from "react-router-dom";
import { PostType } from "../type/postType";

export const loader: LoaderFunction = async () => {
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

export const PostIndex = () => {
  const { posts } = useLoaderData();
  return (
    <ul>
      {posts.map((post: PostType) => {
        return (
          <li key={post.id}>
            <Link
              to={`/posts/${post.id}`}
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              {post.id}:{post.title}
            </Link>

            <br />
          </li>
        );
      })}
    </ul>
  );
};
