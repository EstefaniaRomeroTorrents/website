import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import A from "./pages/a/A";
import B from "./pages/b/B";
import Home from "./pages/home/Home";
import AppLayout from "./layout/app/AppLayout";
import NotFound from "./pages/404/NotFound";

/* Tres maneres diferents de declarar les rutes */

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  /* {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/a",
        element: <A />,
      },
    ],
  },*/
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/a",
        element: <A />,
      },
      {
        path: "/b",
        element: <B />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
  /* {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "a",
        element: <A />,
      },
      {
        path: "b",
        element: <B />,
      },
    ],
    path: "b",
        element: <B />,
  },*/
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
