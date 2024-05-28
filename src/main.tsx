import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root.tsx";
import { Home } from "./routes/Home.tsx";
import { About } from "./routes/About.tsx";
import { Contact } from "./routes/Contact.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
