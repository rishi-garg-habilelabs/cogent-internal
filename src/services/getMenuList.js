// import { ROUTES } from "../constants/routes";

// const modules = require("../constants/modules.json");


export default function getMenuList() {
  const menuItems = [
    {
      title: "Dashboard",
      path: '/dashboard',
      icon: "RateReviewIcon",
    //   module: modules.USER_ACTIVITY,
    },
    {
      title: "Home Page",
      path: '/',
      icon: "RateReviewIcon",
    //   module: modules.USER_ACTIVITY,
    },
    {
        title: "Register",
        path: '/register',
        icon: "MailIcon",
       // module: modules.IP_FIREWALL,
      },
  ];
  return menuItems;
}
