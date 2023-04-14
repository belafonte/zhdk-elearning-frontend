import type { PageServerLoad } from "./$types";
import URQLClient from "$graphql/urqlClient";
import type { GetTileDataQuery } from "$graphql/types";
import { GET_TILE_DATA } from "$graphql/queries";
import { PUBLIC_STATE } from "$env/static/public";

export const load: PageServerLoad = async ({ params }) => {
	const category = params.category;
	const filterCategory = category.replace(/^./, category.charAt(0).toUpperCase());
	const filterDate =
		category === "event" ? { $gte: new Date().toISOString().substring(0, 10) } : null;
	const sort = category === "event" ? { "event.fromDate": true } : { _created: true };

	const posts = await URQLClient.query<GetTileDataQuery>(GET_TILE_DATA, {
		limit: null,
		filter: { _state: PUBLIC_STATE, category: filterCategory, "event.fromDate": filterDate },
		sort: sort
	})
		.toPromise()
		.then((res) => res.data?.contentModel);

	let cols: { mobile: number; tablet: number; desktop: number };

	switch (params.category) {
		case "insights":
		case "community":
			cols = { mobile: 1, tablet: 2, desktop: 2 };
			break;
		default:
			cols = { mobile: 2, tablet: 3, desktop: 4 };
			break;
	}

	return { cols: cols, highlightColor: "#EEEEEE", category: category, posts };
};
