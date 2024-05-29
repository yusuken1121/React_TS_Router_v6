import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root.tsx";
import { Home } from "./routes/Home.tsx";
import { About } from "./routes/About.tsx";
import { Contact } from "./routes/Contact.tsx";
import { Posts } from "./routes/Posts.tsx";
import { ErrorPage } from "./routes/Error-pages.tsx";
import { Post } from "./routes/Post.tsx";
import { PostIndex, loader } from "./routes/Postindex.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "posts",
        element: <Posts />,
        children: [
          {
            index: true,
            element: <PostIndex />,
            loader: loader,
          },
          {
            path: ":postId",
            element: <Post />,
          },
        ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
