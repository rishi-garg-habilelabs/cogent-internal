
import { Interceptor } from "./Interceptor";
import {Config}  from "../constant";
const axios = require("axios");
const instanceUrl = axios.create({
	baseURL: Config.API_BASE,
	transformRequest: [
		function (data, headers) {
			try {
				let token = sessionStorage.getItem("satellizer_token");
				if (token) {
						headers.Authorization = "Bearer " //+ token;
				}
			} catch (error) {
				console.log("transformRequest", error);
			}
			return JSON.stringify(data);
		},
	],
	headers: {
		"Content-Type": "application/json",
		"Cache-Control": "no-cache",
		"access-control-allow-origin": "*",
		Pragma: "no-cache",
	},
});

const instanceUrlWithMultipart = axios.create({
	baseURL: Config.API_BASE,
	transformRequest: [
		function (data, headers) {
			let token = sessionStorage.getItem("satellizer_token");
			if (token) {
				if (token) {
					headers.Authorization = "Bearer " + token;
				}
			}
			return data;
		},
	],
	headers: {
		"Content-Type": "multipart/form-data",
		"Cache-Control": "no-cache",
		"access-control-allow-origin": "*",
		Pragma: "no-cache",
	},
});

/**
 * httpservice for get and post json formatted data
 * @returns {*}
 */
export const httpservice = () => {
	try {
		instanceUrl.interceptors.request.use((request) =>
			Interceptor.requestHandler(request)
		);
		instanceUrl.interceptors.response.use(
			(response) => Interceptor.successHandler(response),
			(error) => Interceptor.errorHandler(error)
		);
    
		return instanceUrl;
	} catch (error) {
		console.log("httpservice error", error);
	}
};

/**
 * httpserviceWithMultipart for sending form data
 * @returns {*}
 */
export const httpserviceWithMultipart = () => {
	instanceUrlWithMultipart.interceptors.request.use((request) =>
		Interceptor.requestHandler(request)
	);
	instanceUrlWithMultipart.interceptors.response.use(
		(response) => Interceptor.successHandler(response),
		(error) => Interceptor.errorHandler(error)
	);
	return instanceUrlWithMultipart;
};
