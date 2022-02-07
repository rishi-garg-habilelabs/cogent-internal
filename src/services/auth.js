import request from '../utils/request';
import constant from '../constant/config';
import {httpservice}from '../react-config/httpservice'


export function getData() {
	return httpservice()
		.get('/')
		.then(function (response) {
			return response.data;
		})
		.catch((error) => {
			return error.response;
		});
}