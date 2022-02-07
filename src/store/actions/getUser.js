import i18n from "../../i18n";
import { updateSingleUser, getUserInfo } from "../../services/userService";

/**
 * Update user Action.
 * @param id
 * @param data
 * @returns {function(*): *}
 */
export const getUser = () => (dispatch) => {
  dispatch(request({ loggedIn: true }));
  getUserInfo()
    .then((user) => {
      // handle success
      user.loggedIn = true;
      localStorage.setItem("langugae", user.language || "en");
      i18n.changeLanguage(user.language);
      dispatch(success(user));
    })
    .catch((error) => {
      // handle error
      dispatch(failure(error.toString()));
    });

  function request(user) {
    return { type: "GET_USER_REQUEST", user };
  }

  function success(user) {
    return { type: "GET_USER_SUCCESS", user };
  }

  function failure(error) {
    return { type: "GET_USER_FAILURE", error };
  }
};

export const updateUser = (id, data) => (dispatch, getState) => {
  const { user } = getState();
  const previousLang = user?.language;
  updateSingleUser(id, data)
    .then((user) => {
      user.loggedIn = true;
      const lang = user?.language || "en";
      localStorage.setItem("langugae", lang);

      i18n.changeLanguage(user.language);
      if (previousLang !== lang) {
        dispatch({
          type: "USER_LANGUAGE_UPDATED",
        });
      }
      dispatch({
        type: "USER_UPDATE",
        payload: user,
      });
    })
    .catch((error) => {
      // handle error
      dispatch({
        type: "USER_UPDATE",
        payload: [],
      });
    });
};
