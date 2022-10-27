import type { PageServerLoad } from "./$types";
import type { ICategory } from "$lib/constants";
import { API_KEY } from "$env/static/private";
import { PUBLIC_ENDPOINT } from "$env/static/public";

interface IResponse {
	community: ICategory;
	knowledge: ICategory;
	kosmos: ICategory;
	glossary: any;
	highlights: any;
	event: any;
}

export const load: PageServerLoad = async (params) => {
	const fields =
		"fields={ category: true, title: true, color: true, title_image: true, rotation: true, mask: true, event: true, slug: true }";

	const community = await fetch(
		`${PUBLIC_ENDPOINT}/content/items/content?${fields}&filter={category: "Community"}&limit=8`,
		{
			method: "GET",
			headers: {
				"api-key": API_KEY
			}
		}
	)
		.then((response) => response.json())
		.then((response) => {
			return response;
		});

	const kosmos = await fetch(
		`${PUBLIC_ENDPOINT}/content/items/content?${fields}&filter={category: "Kosmos"}&limit=8`,
		{
			method: "GET",
			headers: {
				"api-key": API_KEY
			}
		}
	)
		.then((response) => response.json())
		.then((response) => {
			return response;
		});

	const knowledge = await fetch(
		`${PUBLIC_ENDPOINT}/content/items/content?${fields}&filter={category: "Knowledge in use"}&limit=8`,
		{
			method: "GET",
			headers: {
				"api-key": API_KEY
			}
		}
	)
		.then((response) => response.json())
		.then((response) => {
			return response;
		});

	const glossary = await fetch(`${PUBLIC_ENDPOINT}/content/item/glossary?fields={slider: true}`, {
		method: "GET",
		headers: {
			"api-key": API_KEY
		}
	})
		.then((response) => response.json())
		.then((response) => {
			return response;
		});

	const highlights = await fetch(`${PUBLIC_ENDPOINT}/content/item/highlights?populate=1`, {
		method: "GET",
		headers: {
			"api-key": API_KEY
		}
	})
		.then((response) => response.json())
		.then((response) => {
			return response;
		});

	const event = await fetch(
		`${PUBLIC_ENDPOINT}/content/item/content?filter={category: "Event"}&limit=1`,
		{
			method: "GET",
			headers: {
				"api-key": API_KEY
			}
		}
	)
		.then((response) => response.json())
		.then((response) => {
			return response;
		});

	const data = {
		highlightColor: "#EEEEEE",
		community: community,
		knowledge: knowledge,
		kosmos: kosmos,
		glossary: glossary,
		event: event,
		highlights: highlights
	} as IResponse;

	return data;
};
