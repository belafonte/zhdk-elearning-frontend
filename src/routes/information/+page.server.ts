import type { PageServerLoad } from "./$types";
import URQLClient from "$graphql/urqlClient";
import type { GetInformationQuery } from "$graphql/types";
import { GET_INFORMATION } from "$graphql/queries";

export const load = (async () => {
	const data = await URQLClient.query<GetInformationQuery>(GET_INFORMATION, {})
		.toPromise()
		.then((res) => res.data?.informationModel);

	return { ...data };
}) satisfies PageServerLoad;
