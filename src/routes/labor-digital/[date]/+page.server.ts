import type { PageServerLoad } from "./$types";
import URQLClient from "$graphql/urqlClient";
import type { GetLaborQuery } from "$graphql/types";
import { GET_LABOR } from "$graphql/queries";
import { PUBLIC_STATE } from "$env/static/public";

export const load = (async ({ params }) => {
	const data = await URQLClient.query<GetLaborQuery>(GET_LABOR, {
		filter: { _state: PUBLIC_STATE, date: params.date }
	})
		.toPromise()
		.then((res) => res.data?.laborModel?.at(0));

	console.debug(data.persons.at(0).person);
	return { ...data };
}) satisfies PageServerLoad;
