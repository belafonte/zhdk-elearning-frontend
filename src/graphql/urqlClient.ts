import { Client, cacheExchange, fetchExchange } from "@urql/core";

const URQLClient = new Client({
  url: "https://elearningnext.lela.ch/api/gql",
  exchanges: [cacheExchange, fetchExchange],
});

export default URQLClient;
