import Constant from '../constant';

const initialState = {
  todos: [],
};

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case Constant.GET_TO_DOS:

      return {
        ...state,
        todos: action.payload,
      };

    default:
      return state;
  }
};

export default auth;
