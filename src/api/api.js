export const Api = {
	baseUrl: "https://backend-rick-andmorty.herokuapp.com",

	createUrl: () => Api.baseUrl + "/personagens/create/",

	readAllUrl: () => Api.baseUrl + "/personagens/read-all",
	readSingleUrl: (id) => Api.baseUrl + "/personagens/read-by-id/" + id,

	updateUrl: (id) => Api.baseUrl + "/personagens/update/" + id,

	deleteUrl: (id) => Api.baseUrl + "/personagens/delete/" + id,
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
