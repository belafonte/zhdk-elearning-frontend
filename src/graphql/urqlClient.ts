import { Client, cacheExchange, fetchExchange, ssrExchange } from "@urql/core";
import { PUBLIC_GRAPHQL } from "$env/static/public";

// const isServerSide = typeof window === "undefined";
//
// // The `ssrExchange` must be initialized with `isClient` and `initialState`
// const ssr = ssrExchange({
// 	isClient: !isServerSide,
// 	initialState: !isServerSide ? window.__URQL_DATA__ : undefined
// });

const URQLClient = new Client({
	url: PUBLIC_GRAPHQL,
	exchanges: [cacheExchange, fetchExchange]
});

export default URQLClient;
