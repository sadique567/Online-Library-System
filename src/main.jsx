import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { ErrorMessage } from "./component/error_page.jsx";
import { ContactUs } from "./component/contact.jsx";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BookList } from "./component/bookList.jsx";
import { BookDetails } from "./component/book_details.jsx";
import { Timer } from "./component/Timer.jsx";
import { Memo } from "./component/memo.jsx";
import { Home } from "./component/home.jsx";
import { CartItems } from "./component/CartItems.jsx";

const AboutUS = lazy(() => import("./component/about_us.jsx"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
            {
      path:"/",
      element: <Home/>
            },
      {
        path: "/contact",
        element: <ContactUs />,
        errorElement: <ErrorMessage />,
      },
      {
        path: "/aboutus",
        element: (
          <Suspense fallback={<div>Loading......</div>}>
            <AboutUS />
          </Suspense>
        ),
        errorElement: <ErrorMessage />,
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
      },

      {
        path: "/timer",
        element: <Timer />,
      },
      {
        path: "/memo",
        element: <Memo/>,
      },
      {
        path: "/cart",
        element : <CartItems></CartItems>
      }
    ],
    errorElement: <ErrorMessage />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={appRouter} />
  </StrictMode>
);
