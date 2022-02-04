const activeSideBar = (state, action) => {
    if (typeof state === "undefined") {
      state = 0;
    }
    if (action.type === "ACTIVE_SIDE_BAR") {
      return action.id;
    } else {
      return state;
    }
  };
  
  export default activeSideBar;
  