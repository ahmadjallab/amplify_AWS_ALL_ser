import React from "react";
import BookList from "./components/booksList/BookList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import IntroPage from "./components/pages/IntroPage";
const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element:<IntroPage/>
      },
      {

        path: "books",
        element: <BookList />,
        
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={BrowserRouter} />;
}
