import FuseUtils from "@fuse/utils";
import FuseLoading from "@fuse/core/FuseLoading";
import { Navigate } from "react-router-dom";
import settingsConfig from "app/configs/settingsConfig";
import SignInConfig from "../main/sign-in/SignInConfig";
import SignUpConfig from "../main/sign-up/SignUpConfig";
import SignOutConfig from "../main/sign-out/SignOutConfig";
import Error404Page from "../main/404/Error404Page";
import ExampleConfig from "../main/example/ExampleConfig";

// ------------ By Senza ------------
import ClientDetails from "../components/ClientCard/ClientDetails";
import People from "../components/People/People";
import Attendance from "../components/People/Attendance/Attendance";
import Employee from "../components/People/Employee/Employee";
import CalendarApp from "../Calender/dialogs/CalendarApp";
import Marketingnav from "../components/navbars/Navbars/Marketingnav";
import ApplicationUpdate from "../components/forms/marketingforms/People/ApplicationUpdate";
import UpdateInquiry from "../components/forms/marketingforms/updateInquiry";
import SalesUpdate from "../components/forms/marketingforms/SalesUpdate";


const routeConfigs = [ExampleConfig, SignOutConfig, SignInConfig, SignUpConfig];

const routes = [
  ...FuseUtils.generateRoutesFromConfigs(
    routeConfigs,
    settingsConfig.defaultAuth
  ),
  {
    path: "/applicationform",
    element: <ApplicationUpdate />,
  },

  {
    path: "/updateInquiryDetails",
    element: <UpdateInquiry />,
  },
  {
    path: "/salesupdateuser",
    element: <SalesUpdate />,
  },
  {
    path: "/marketing",
    element: <Marketingnav />,
  },
  {
    path: "/marketing/client/clientdetails",
    element: <ClientDetails />,
  },
  {
    path:'./people/employee',
    element:<Employee/>
  },
  {
    path: "/people",
    element: <People />,
  },
  {
    path: "/people/employee",
    element: <Employee/>,
  },
  {
    path: "/people/attendance/calender",
    element: <CalendarApp />,
  },
  {
    path: "/people",
    element: <Attendance />,
  },
  {
    path: "loading",
    element: <FuseLoading />,
  },
  {
    path: "404",
    element: <Error404Page />,
  },
  {
    path: "*",
    element: <Navigate to="404" />,
  },
];

export default routes;
