import type { PageServerLoad } from "./$types";
import type { ICategory } from "$lib/constants";
import URQLClient from "$graphql/urqlClient";
import type { GetTileDataQuery } from "$graphql/types";
import { GET_TILE_DATA } from "$graphql/queries";

export const load: PageServerLoad = async ({ params }) => {
	const category = params.category;

	const filter = category.replace(/^./, category.charAt(0).toUpperCase());
	const posts = await URQLClient.query<GetTileDataQuery>(GET_TILE_DATA, {
		limit: null,
		filter: { category: filter }
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
