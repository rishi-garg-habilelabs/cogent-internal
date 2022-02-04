const isSideBarOpen = (state, action) => {
    if (typeof state === "undefined") {
      state = true;
    }
    console.log(state,'action',action)
    if (action.type === "TOGGLE_SIDEBAR") {
      return !state;
    } else if (action.type === "MOBILE_MENU") {
      return false;
    } else if (action.type === "MOBILE_OPEN") {
      return false;
    } else {
      return state;
    }
  };
  
  export default isSideBarOpen;
  