
export const Interceptor = {
	requestHandler(request) {
		return request;
	},
	errorHandler(error) {
		if (error && error.response.status === 401) {
			sessionStorage.removeItem("satellizer_token");
			window.location = "/";
			return {};
		} else {
			return Promise.reject({...error});
		}
	},
	successHandler(response) {
		if (response && response.status === 401) {
			//unauthorized code. logout and move to login.
			sessionStorage.removeItem("satellizer_token");
			window.location = "/";
			return {};
		} else {
			return response;
		}
	},
};
