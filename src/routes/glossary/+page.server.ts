import URQLClient from "$graphql/urqlClient";
import { GET_GLOSSARY } from "$graphql/queries";
import type { GetGlossaryQuery } from "$graphql/types";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
	const data = await URQLClient.query<GetGlossaryQuery>(GET_GLOSSARY, {})
		.toPromise()
		.then((res) => res.data?.glossaryModel);

	return { ...data };
}) satisfies PageServerLoad;
