import type { PageServerLoad } from "./$types";
import URQLClient from "$graphql/urqlClient";
import { PUBLIC_STATE } from "$env/static/public";
import type {
	GetTileDataQuery,
	GetGlossarySliderQuery,
	GetNextEventQuery,
	GetHighlightsQuery
} from "$graphql/types";
import {
	GET_TILE_DATA,
	GET_GLOSSARY_SLIDER,
	GET_NEXT_EVENT,
	GET_HIGHLIGHTS
} from "$graphql/queries";

// export const prerender = "auto";

const isRSS = (value: unknown): value is true => {
	return value == true;
};

export const load: PageServerLoad = async () => {
	const community = await URQLClient.query<GetTileDataQuery>(GET_TILE_DATA, {
		limit: 8,
		filter: {
			_state: PUBLIC_STATE,
			category: "Community"
		}
	})
		.toPromise()
		.then((res) => res.data?.contentModel);

	const cosmos = await URQLClient.query<GetTileDataQuery>(GET_TILE_DATA, {
		limit: 8,
		filter: { _state: PUBLIC_STATE, category: "Cosmos" }
	})
		.toPromise()
		.then((res) => res.data?.contentModel);

	const experience = await URQLClient.query<GetTileDataQuery>(GET_TILE_DATA, {
		limit: 8,
		filter: { _state: PUBLIC_STATE, category: "Experience" }
	})
		.toPromise()
		.then((res) => res.data?.contentModel);

	const glossary = await URQLClient.query<GetGlossarySliderQuery>(GET_GLOSSARY_SLIDER, {
		limit: 8
	})
		.toPromise()
		.then((res) => res.data?.glossaryModel);

	const highlights = await URQLClient.query<GetHighlightsQuery>(GET_HIGHLIGHTS, undefined)
		.toPromise()
		.then((res) => res.data?.highlightsModel);

	const event = await URQLClient.query<GetNextEventQuery>(GET_NEXT_EVENT, {
		sort: { "event.fromDate": false },
		filter: {
			category: "Event",
			_state: PUBLIC_STATE,
			"event.fromDate": { $gte: new Date().toISOString().substring(0, 10) }
		}
	})
		.toPromise()
		.then((res) => res.data?.contentModel?.at(0));

	return {
		highlightColor: "#EEEEEE",
		community: community,
		experience: experience,
		cosmos: cosmos,
		glossary: glossary,
		event: event,
		highlights: highlights
	};
};
