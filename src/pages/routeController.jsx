import { createBrowserRouter, RouterProvider, useRoutes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./home/home.jsx"));
const About = lazy(() => import("./about/about.jsx"));
const Contact = lazy(() => import("./contact/contact.jsx"));

const RouteController = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>
      ),
    },
    {
      path: "about",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <About />
        </Suspense>
      ),
    },
    {
      path: "contact",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Contact />
        </Suspense>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};
export default RouteController;
