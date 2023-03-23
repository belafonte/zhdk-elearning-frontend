import type { PageServerLoad } from "./$types";
import type { Detail } from "./response";

import { API_KEY } from "$env/static/private";
import { PUBLIC_ENDPOINT } from "$env/static/public";

export const load = (async ({ params }) => {
	const query = `${PUBLIC_ENDPOINT}/content/items/content?filter={ slug: '${params.detail}'}`;

	const response = await fetch(query, {
		method: "get",
		headers: {
			"api-key": API_KEY
		}
	})

	const [data]: [Detail] = await response.json();


	if (data !== undefined) {
		data.highlightColor = data.color !== null ? data.color.colors[0] : "#EEEEEE";
	}

	return data;
}) satisfies PageServerLoad;
