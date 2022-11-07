import type { PageServerLoad } from "./$types";
import type { ICategory } from "$lib/constants";
import { API_KEY } from "$env/static/private";
import { PUBLIC_ENDPOINT } from "$env/static/public";

interface OverviewData extends ICategory {
	cols: { mobile: number; tablet: number; dektop: number };
}

export const load: PageServerLoad = async ({ params }) => {
	const category = params.category;

	const fields =
		"fields={ category: true, title: true, color: true, title_image: true, mask: true, rotation: true, event: true, slug: true, tags: true }";
	let filter = category.replace(/^./, category.charAt(0).toUpperCase());
	filter = filter.replaceAll("-", " ");
	let filterQuery = `filter={category: "${filter}"}`;

	if (filter.localeCompare("Questions", "en") > -1) {
		filterQuery = "filter={category: 'Leitfrage'}";
	}

	// let overviewData: OverviewData = {} as OverviewData;
	let cols: { mobile: number; tablet: number; desktop: number };
	const query = `${PUBLIC_ENDPOINT}/content/items/content?${fields}&${filterQuery}`;

	const res = await fetch(query, {
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
		case "questions":
		case "community":
			cols = { mobile: 1, tablet: 2, desktop: 2 };
			break;
		default:
			cols = { mobile: 2, tablet: 3, desktop: 4 };
			break;
	}

	// const data = Object.assign(cols, res);
	const data = { cols: {}, data: [], highlightColor: "" };

	data.cols = cols;
	data.data = res;
	data.category = category;
	data.highlightColor = "#EEEEEE";
	return data;
};
