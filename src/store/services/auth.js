import request from "../../utils/request";

// Sign in
const signIn = (payload) => request.post("signin", payload);

// Registration
const register = (payload) => request.post("users", payload);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  signIn,
  register,
};
