 import { Routes } from  '../constant';

// const modules = require("../constants/modules.json");

export default function getMenuList() {
  const menuItems = [
    {
      title: "Dashboard",
      path: Routes.DASSHBOARD,
      icon: "RateReviewIcon",
      module: "",
    },
    {
      title: "Home Page",
      path: "/",
      icon: "RateReviewIcon",
      module: "",
    },
    {
      title: "Register",
      path: Routes.REGISTER,
      icon: "MailIcon",
      module: "",
    },
  ];
  return menuItems;
}
