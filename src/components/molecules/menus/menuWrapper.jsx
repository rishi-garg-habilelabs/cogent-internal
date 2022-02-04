/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Menu from "./menu";
import { useTranslation } from "react-i18next";
import icons from "../../../assets/icons";
import { useDispatch } from "react-redux";

/**
 * Custom menu, this decides what to show and what not dynamically.
 * this will render menu dyanmically bases on name matching  of menu.icon and export from index in icons folder.
 * menu should show label only when we side bar open or it is submenu.
 * @param props
 * @returns {*}
 * @constructor
 */
const CMenu = (props) => {
  const { menu, isSubMenu, setCloseMenu } = props;
  const { t } = useTranslation("translation");
  const dispatch = useDispatch();
  let IconComponent;
  if (menu.icon && icons[menu.icon]) {
    IconComponent = icons[menu.icon];
  }

  function toggleSidebar() {
    console.log('in syoggle')
    dispatch({ type: "MOBILE_MENU" });
  }

  return (
    <Menu
      to={menu.path}
      isSubMenu={isSubMenu}
      setCloseMenu={setCloseMenu}
      toggleSidebar={toggleSidebar}
    >
      {IconComponent ? <IconComponent /> : ""}
      {
        <>
          <span className="menuList">{t(menu.title)}</span>
        </>
      }
    </Menu>
  );
};

export default CMenu;
