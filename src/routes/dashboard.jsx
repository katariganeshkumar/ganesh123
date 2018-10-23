import Dashboard from "views/Dashboard/Dashboard.jsx";
import Notifications from "views/Notifications/Notifications.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import UserPage from "views/UserPage/UserPage.jsx";

var dashRoutes = [
  {
    path: "/Profile",
    name: "Profile",
    icon: "nc-icon nc-circle-10",
    component: Dashboard
  },
  {
    path: "/Experience",
    name: "Experience",
    icon: "nc-icon nc-bank",
    component: Icons
  },
  {
    path: "/projects",
    name: "Projects",
    icon: "nc-icon nc-book-bookmark",
    component: Maps
  },
  {
    path: "/TechnologysWorked",
    name: "Technologys Worked",
    icon: "nc-icon nc-touch-id",
    component: Notifications
  },
  {
    path: "/ContactMe",
    name: "Contact Me",
    icon: "nc-icon nc-pin-3",
    component: UserPage
  },
  { redirect: true, path: "/", pathTo: "/Profile", name: "Dashboard" }
];
export default dashRoutes;
