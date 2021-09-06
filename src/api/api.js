export const Api = {
	baseUrl: "https://backend-rick-andmorty.herokuapp.com",

	createUrl: () => Api.baseUrl + "/create",

	readAllUrl: () => Api.baseUrl + "/read_all",
	readSingleUrl: (id) => Api.baseUrl + "/rea_by_id" + id,

	updateUrl: (id) => Api.baseUrl + "/update" + id,

	deleteUrl: (id) => Api.baseUrl + "/delete" + id,
	deleteAllUrl: () => Api.baseUrl + "/",

	// Create
	buildApiPostRequest: (url, body) => {
		return fetch(url, {
			method: "POST",
			headers: new Headers({
				"Content-type": "application/json",
			}),
			body: JSON.stringify(body),
		});
	},

	// ReadAll
	buildApiGetRequest: (url) => {
		return fetch(url, {
			method: "GET",
		});
	},

	// UpdateById
	buildApiPutRequest: (url, body) => {
		return fetch(url, {
			method: "PUT",
			headers: new Headers({
				"Content-type": "application/json",
			}),
			body: JSON.stringify(body),
		});
	},

	// DeleteAll
	buildApiDeleteRequest: (url) => {
		return fetch(url, {
			method: "DELETE",
		});
	},
};
