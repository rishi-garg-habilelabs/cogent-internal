const activeTabs = (state, action) => {
    if (typeof state === "undefined") {
      state = 0;
    }
    if (action.type === "GET_ACTIVE_TABS") {
      return action.id;
    } else {
      return state;
    }
  };
  
  export default activeTabs;
  