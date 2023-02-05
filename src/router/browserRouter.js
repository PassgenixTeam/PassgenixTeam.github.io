import { createHashRouter } from "react-router-dom";
import ErrorPage from "../pages/Error/ErrorPage";
import homeRoute from "../pages/Home/homeRoute";
import Root from "../global/Root";
import aboutRoute from "../pages/About/aboutRoute";
import worksRoute from "../pages/Works/worksRoute";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [homeRoute, aboutRoute, worksRoute],
  },
]);

export default router;
