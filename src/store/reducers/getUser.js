let user = {};
const initialState = user ? { loggedIn: true, user } : {};
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case "GET_USER_REQUEST":
      user = state;
      user.loggedIn = action.user.loggedIn;
      user.completedExams = state.completedExams;
      return action.user;

    case "GET_USER_SUCCESS":
      user = action.user;
      user.completedExams = state.completedExams;
      return action.user;

    case "VERIFY_OTP":
      // eslint-disable-next-line no-case-declarations
      let userData = { ...state };
      userData.isMobileVerified = true;
      return userData;

    case "GET_USER_FAILURE":
      return {};

    case "USER_UPDATE":
      user = action.payload;
      user["verified"] = "true";
      user.completedExams = state.completedExams;
      return user;

    default:
      return state;
  }
};
