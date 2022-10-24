import type { PageServerLoad } from "./$types";
import type { ICategory } from "$lib/constants";
import { API_KEY } from "$env/static/private";
import { PUBLIC_ENDPOINT } from "$env/static/public";

interface OverviewData extends ICategory {
	cols: { mobile: number; dektop: number };
}

export const load: PageServerLoad = async ({ params }) => {
	const category = params.category;

	const fields =
		"fields={ category: true, title: true, color: true, title_image: true, mask: true }";
	const filter = `filter={category: "${category.replace(/^./, category.charAt(0).toUpperCase())}"}`;

	// let overviewData: OverviewData = {} as OverviewData;
	let cols: { mobile: number; desktop: number };

	const res = await fetch(`${PUBLIC_ENDPOINT}/content/items/content?${fields}&${filter}`, {
		method: "GET",
		headers: {
			"api-key": API_KEY
		}
	})
		.then((response) => response.json())
		.then((response) => {
			return response;
		});

	switch (params.category) {
		case "community":
			cols = { mobile: 1, desktop: 2 };
			break;
		default:
			cols = { mobile: 2, desktop: 4 };
			break;
	}

	// const data = Object.assign(cols, res);

	const data = { cols: {}, data: [], highlightColor: "" };

	data.cols = cols;
	data.data = res;
	data.highlightColor = "#EEEEEE";
	return data;
};