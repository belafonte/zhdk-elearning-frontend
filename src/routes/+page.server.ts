import type { PageServerLoad } from "./$types";
import type { ICategory } from "$lib/constants";
import { API_KEY } from "$env/static/private";
import { PUBLIC_ENDPOINT } from "$env/static/public";

interface IResponse {
	community: ICategory;
	knowledge: ICategory;
	kosmos: ICategory;
}

export const load: PageServerLoad = async (params) => {
	const fields =
		"fields={ category: true, title: true, color: true, title_image: true, rotation: true, mask: true }";

	const res = await fetch(`${PUBLIC_ENDPOINT}/content/items/content?${fields}`, {
		method: "GET",
		headers: {
			"api-key": API_KEY
		}
	})
		.then((response) => response.json())
		.then((response) => {
			return response;
		});

	const data = {
		community: res.filter((el: ICategory) => {
			return el.category === "Community";
		}),

		knowledge: res.filter((el: ICategory) => {
			return el.category === "Knowledge in use";
		}),
		kosmos: res.filter((el: ICategory) => {
			return el.category === "Kosmos";
		})
	} as IResponse;

	return data;
};
