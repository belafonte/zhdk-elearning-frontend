import type { PageServerLoad } from "./$types";
import URQLClient from "$graphql/urqlClient";
import type { GetDetailDataQuery } from "$graphql/types";
import { GET_DETAIL_DATA } from "$graphql/queries";
import { PUBLIC_STATE } from "$env/static/public";

export const load = (async ({ params }) => {
	const data = await URQLClient.query<GetDetailDataQuery>(GET_DETAIL_DATA, {
		filter: { _state: PUBLIC_STATE, slug: params.detail }
	})
		.toPromise()
		.then((res) => res.data?.contentModel?.at(0));

	const highlightColor = data && data.color ? data.color?.colors[0] : "#EEEEEE";

	// if (data && data.event && Object.values(data.event).some((prop) => prop)) {
	// 	console.log("some have values", data.event);
	// }

	return { ...data, highlightColor };
}) satisfies PageServerLoad;
