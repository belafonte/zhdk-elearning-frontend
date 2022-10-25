import type { PageServerLoad } from "./$types";
import type { ICategory } from "$lib/constants";
import { API_KEY } from "$env/static/private";
import { PUBLIC_ENDPOINT } from "$env/static/public";

interface OverviewData extends ICategory {
	cols: { mobile: number; dektop: number };
}

export const load: PageServerLoad = async (params) => {
	let data;

	data = await fetch(`${PUBLIC_ENDPOINT}/content/item/content/${params.params.detail}`, {
		method: "GET",
		headers: {
			"api-key": API_KEY
		}
	})
		.then((response) => response.json())
		.catch(() => {
			return null;
		})
		.then((response) => {
			return response;
		});

	// if query is unsuccessful, try to filter by slug
	if (data === null) {
		const filter = { slug: params.params.detail };

		data = await fetch(`${PUBLIC_ENDPOINT}/content/items/content?filter=${filter}`, {
			method: "GET",
			headers: {
				"api-key": API_KEY
			}
		})
			.then((response) => response.json())
			.catch(() => {
				return null;
			})
			.then((response) => {
				return response;
			});
	}

	data.highlightColor = data.color !== null ? data.color.colors[0] : "#EEEEEE";
	return data;
};
