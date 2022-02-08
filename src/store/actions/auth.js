import * as Constant from '../constant';
import { getTodos } from '../services/auth';

export const getToDo = () => {
  return (dispatch) => {
    getTodos()
      .then((response) => {
        console.log("response", response);
        dispatch({
          type: Constant.GET_TO_DOS,
          payload: response,
        });
      })
      .catch((error) => {
        console.log('error :', error);
      });
  };
};
