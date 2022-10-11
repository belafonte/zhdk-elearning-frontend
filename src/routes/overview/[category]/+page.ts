// import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

interface ICols {
	cols: {
		mobile: number;
		desktop: number;
	};
}

export const load: PageLoad<ICols> = async ({ params }) => {
	switch (params.category) {
		case "community":
			return { cols: { mobile: 1, desktop: 2 } };
		default:
			return { cols: { mobile: 2, desktop: 4 } };
	}
};
