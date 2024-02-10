import React from "react";
import ReactDOM from "react-dom/client";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import "./index.css";
import Epg from "./components/Epg/Epg.jsx";
import Home from "./components/Home/Home.jsx";
import Error from "./components/Error/Error.jsx";
import Layout from "../src/Layout.jsx";
import Watch from "./components/Watch/Watch.jsx";
import Live from "./components/Live/Live.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Layout />} errorElement={<Error />}>
      <Route path='/' element={<Home />} />
      <Route path='catchup/:id/:date/' element={<Epg />} />
      <Route path='catchup/:id/' element={<Epg />} />
      <Route path='watch/:id/:showid' element={<Watch />} />
      <Route path='watch/:id/live' element={<Live />} />
    </Route>
  )
);


// const router = createBrowserRouter([
//   {
//     path: "",
//     element: <Layout />,
//     errorElement: <Error />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "home",
//         element: <Home />,
//       },
//       {
//           path: "Epg/:id/:date/",
//         element: <Epg />,
//       },
//       {
//         path: "Epg/:id/",
//         element: <Epg />,
//       },
//     ],
//   },
// ]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
