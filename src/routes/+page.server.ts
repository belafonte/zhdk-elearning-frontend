import type { PageServerLoad } from "./$types";
import { API_KEY } from "$env/static/private";
import { PUBLIC_ENDPOINT } from "$env/static/public";

import URQLClient from "../graphql/urqlClient";
import type {
	GetCosmosQuery,
	GetCommunityQuery,
	GetExperienceQuery,
	GetGlossarySliderQuery,
	GetNextEventQuery
} from "../graphql/types";
import {
	GET_COSMOS,
	GET_COMMUNITY,
	GET_EXPERIENCE,
	GET_GLOSSARY_SLIDER,
	GET_NEXT_EVENT
} from "../graphql/queries";

export const load: PageServerLoad = async () => {
	const communityQuery = await URQLClient.query<GetCommunityQuery>(GET_COMMUNITY, {
		limit: 8
	}).toPromise();
	//
	const community = communityQuery.data?.contentModel;

	const cosmosResult = await URQLClient.query<GetCosmosQuery>(GET_COSMOS, {
		limit: 8
	}).toPromise();
	//
	const cosmos = cosmosResult.data?.contentModel;

	const experience = await URQLClient.query<GetExperienceQuery>(GET_EXPERIENCE, {
		limit: 8
	})
		.toPromise()
		.then((res) => res.data?.contentModel);

	const glossary = await URQLClient.query<GetGlossarySliderQuery>(GET_GLOSSARY_SLIDER, {
		limit: 8
	})
		.toPromise()
		.then((res) => res.data?.glossaryModel);

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

	const event = await URQLClient.query<GetNextEventQuery>(GET_NEXT_EVENT, {})
		.toPromise()
		.then((res) => res.data?.contentModel?.at(0));

	console.log(cosmos);

	const data = {
		highlightColor: "#EEEEEE",
		community: community,
		experience: experience,
		cosmos: cosmos,
		glossary: glossary,
		event: event,
		highlights: highlights
	};

	return data;
};
