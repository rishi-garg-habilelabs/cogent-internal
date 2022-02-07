import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

import MenuChildren from "./menuChildren";
import CMenu from "./menuWrapper";
import MenuList from "@material-ui/core/MenuList/MenuList";
import getMenuList from "../../../services/getMenuList";
// import permissionInstance from "../../../services/Permissions";

const useStyles = makeStyles({
  sidebarMenus:{
    padding:0,
    display:'flex',
    flexDirection:'column',
    outline:0,
    borderBottom:'2px solid  #80808061'
},
});

const CMenuList = (props) => {
  const classes = useStyles();
  const menuList = getMenuList();
  console.log('menuItemsmenuItemsmenuItems',menuList)

  const [openMenu, setOpenMenu] = useState(true);

  //set open menu
  function setOpenMenuItem(id) {
    setOpenMenu(id);
  }

  function setCloseMenu() {
    setOpenMenu(false);
  }

  const memoizedList = React.useMemo(() => {
    let filteredList = [];
    menuList.forEach((menu) => {
      if (menu.children && menu.children.length) {
        let allowedSubMenu = menu.children.filter((subMenu) => {
         // return permissionInstance.canRead(subMenu.module);
         console.log(subMenu.module)
         return subMenu.module
        });
        if (allowedSubMenu && allowedSubMenu.length) {
          menu.children = allowedSubMenu;
          filteredList.push(menu);
        }
      } 
      else {// if (permissionInstance.canRead(menu.module)) {
        filteredList.push(menu);
      }
    });
    return filteredList;
  }, [menuList]);

  return (
    <MenuList className={classes.sidebarMenus}>
      {memoizedList.map((menu, index) => {
        return menu.children ? (
          <MenuChildren
            menu={menu}
            openMenu={openMenu}
            setOpenMenuItem={setOpenMenuItem}
            key={index}
          />
        ) : (
          <CMenu
            isSubMenu={false}
            setCloseMenu={setCloseMenu}
            menu={menu}
            key={index}
          />
        );
      })}
    </MenuList>
  );
};

export default CMenuList;
