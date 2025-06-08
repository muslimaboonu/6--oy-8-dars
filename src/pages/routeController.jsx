import {useRoutes} from "react-router-dom";
import {lazy, Suspense} from "react";

const Home = lazy(() => import("./home/home.jsx"))
const About = lazy(() => import("./about/about.jsx"))
const Contact = lazy(() => import("./contact/contact.jsx"))

const RouteController = () => {
  return (
      useRoutes([
        {
          path: "",
          element: <Suspense><Home/></Suspense>,
        },
        {
          path: "about",
          element: <Suspense><About/></Suspense>,
        },
        {
          path: "contact",
          element: <Suspense><Contact/></Suspense>,
        }
      ])
  )
}
export default RouteController
