import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, About, Contact } from "./pages";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
