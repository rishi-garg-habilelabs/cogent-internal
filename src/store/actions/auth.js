import Constant from '../constant';
import { getTodos } from '../services/auth';

export const getToDo = () => (dispatch) => {
  getTodos()
    .then((response) => {
      dispatch({
        type: Constant.GET_TO_DOS,
        payload: response,
      });
    })
    .catch((error) => {
      console.log('error :', error);
    });
};

export default {
  getToDo,
};
