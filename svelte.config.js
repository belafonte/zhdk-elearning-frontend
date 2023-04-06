import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		alias: {
			$graphql: "./src/graphql/"
		},
		adapter: adapter(),
		csp: {
			mode: "hash"
		}
	}
};

export default config;
