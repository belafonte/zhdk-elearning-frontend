import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	schema: "https://elearningnext.lela.ch/api/gql",
	documents: ["queries.ts"],
	generates: {
		"path/to/file.ts": {
			plugins: ["typescript", "typescript-operations"]
		}
	}
};

export default config;
