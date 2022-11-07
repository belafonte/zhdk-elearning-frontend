import type { PageServerLoad } from "./$types";
import type { ICategory } from "$lib/constants";
import { API_KEY } from "$env/static/private";
import { PUBLIC_ENDPOINT } from "$env/static/public";

interface OverviewData extends ICategory {
	cols: { mobile: number; dektop: number };
}

export const load: PageServerLoad = async (session) => {
	let data;

	const query = `${PUBLIC_ENDPOINT}/content/items/content?filter={ slug: '${session.params.detail}'}`;

	data = await fetch(query, {
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
	// }

	data = data[0];
	if (data !== undefined) {
		data.highlightColor = data.color !== null ? data.color.colors[0] : "#EEEEEE";
	}
	return data;
};
