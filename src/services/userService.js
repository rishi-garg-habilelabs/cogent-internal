import { httpservice } from "../react-config/httpservice";

export function getUserInfo() {
  return httpservice.get('/api/v1/me')
      .then((response) => {
          // handle success
          return response.data;
      })
      .catch((error) => {
          // handle error
          return error;
      });
}

export function updateSingleUser(userId, data) {
  return httpservice
    .post('/',{ data })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      // handle error
      return error;
    });
}
