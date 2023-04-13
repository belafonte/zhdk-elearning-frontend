import { GET_OFFER } from "$graphql/queries";
import type { GetOfferQuery } from "$graphql/types";
import URQLClient from "$graphql/urqlClient";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
	const data = await URQLClient.query<GetOfferQuery>(GET_OFFER, {})
		.toPromise()
		.then((res) => res.data?.offerModel);

	return { ...data };
}) satisfies PageServerLoad;
