/**
 * Main header component
 * @param props
 * @returns {*}
 * @constructor
 */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useDispatch } from "react-redux";

import { useTranslation } from "react-i18next";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import NotificationsIcon from "@mui/icons-material/Notifications";
import styles from "./style";
import useStyles from "../../../custom-hooks/useStyles";
import useSideBarOpen from "../../../custom-hooks/useSideBarOpen";
import clsx from "clsx";

const Header = (props) => {
  const { changeTheme } = props;
  let isSideBarOpen = useSideBarOpen();
  const { t } = useTranslation("translation");

  const dispatch = useDispatch();
  const classes = useStyles(styles)();

  function toggleSidebar() {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  }

  return (
    <div
      className={clsx(
        classes.header,
        isSideBarOpen ? "" : classes.shrinkHeaderBar
      )}
    >
      <div className={`${classes.moveSideBar}`} onClick={toggleSidebar}>
        <MenuSharpIcon />
      </div>
      <div className="notificationBell">
          <NotificationsIcon />
        </div>
      <div className="profileContainer">
        <AccountCircleIcon />
      </div>
    </div>
  );
};

export default React.memo(Header);
