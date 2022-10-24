import { API_KEY } from "$env/static/private";
import { PUBLIC_ENDPOINT } from "$env/static/public";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
	const data = await fetch(`${PUBLIC_ENDPOINT}/content/item/imprint`, {
		method: "GET",
		headers: {
			"api-key": API_KEY
		}
	})
		.then((response) => response.json())
		.then((response) => {
			return response;
		});

	console.log(data);

	return data;
};
