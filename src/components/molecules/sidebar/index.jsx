import React from "react";
import styles from "./style";
import useStyles from "../../../custom-hooks/useStyles";
import MenuList from "../menus/menuList";
import useSideBarOpen from "../../../custom-hooks/useSideBarOpen";
import Drawer from '@mui/material/Drawer';
import clsx from 'clsx';
/**
 * Main side bar.
 * @param props
 * @returns {*}
 * @constructor
 */
const Sidebar = (props) => {
  const classes = useStyles(styles)();
  const isSideBarOpen = useSideBarOpen();
  return (
    <Drawer variant="permanent"
    className={clsx(classes.drawer, {
      [classes.drawerOpen]: isSideBarOpen,
      [classes.drawerClose]: !isSideBarOpen,
    })}
    classes={{
      paper: clsx({
        [classes.drawerOpen]: isSideBarOpen,
        [classes.drawerClose]: !isSideBarOpen,
      }),
    }}>
      <MenuList />
    </Drawer>
  );
};

export default Sidebar;
