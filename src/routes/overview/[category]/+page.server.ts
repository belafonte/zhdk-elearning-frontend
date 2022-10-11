import type { PageServerLoad } from "./$types";
import type { ICategory } from "$lib/constants";
import { API_KEY } from "$env/static/private";
import { PUBLIC_ENDPOINT } from "$env/static/public";

export async function load(params: PageServerLoad) {
	const fields = "fields={ category: true, title: true, color: true }";
	const filter = "filter={ category: 'Community'}";

	const data = await fetch(`${PUBLIC_ENDPOINT}/content/items/content?${fields}&${filter}`, {
		method: "GET",
		headers: {
			"api-key": API_KEY
		}
	})
		.then((response) => response.json())
		.then((response) => {
			return response;
		});

	return data;
}
