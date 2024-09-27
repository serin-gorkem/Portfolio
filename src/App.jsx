import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./Landing";
import Showcase from "./Showcase";
import ErrorPage from "./error-page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/showcase",
    element: <Showcase />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  /* I plan to add two main page (Landing and Showcase), three sections (Home Work WhatIDo ) and two component(navbar and footer) */
  return <RouterProvider router={router} />;
}

export default App;
