<!-- 

    File: Main Page View

    Author: Jan Pistor | Bureau 314
    Year: 2022

    Description: Handles Main Page View

 -->
<script lang="ts">
	// component imports
	import Row from "$lib/components/Row.svelte";
	import Tile from "$lib/components/Tile.svelte";
	import type { PageServerData } from "./$types";

	export let data: PageServerData;
</script>

{#if data !== null}
	<div id="rows">
		{#if data.knowledge.length > 0}
			<Row title="Knowledge in use" url="knowledge-in-use" catData={data.knowledge}>
				{#each data.knowledge as entry}
					<Tile size="l" title={entry.title} color={entry.color.colors[0]} />
				{/each}
			</Row>
		{/if}
		{#if data.community.length > 0}
			<Row title="Community" url="community" catData={data.community}>
				{#each data.community as entry}
					<Tile size="l" title={entry.title} color={entry.color.colors[0]} />
				{/each}
			</Row>
		{/if}
		{#if data.kosmos.length > 0}
			<Row title="Kosmos" url="kosmos" catData={data.kosmos}>
				{#each data.kosmos as entry}
					<Tile size="l" title={entry.title} color={entry.color.colors[0]} />
				{/each}
			</Row>
		{/if}
	</div>
{/if}
<!-- <style>
	:global(#rows #row) {
		@apply mb-84;
	}
	:global(#rows #row:last-child) {
		@apply mb-[168px];
	}


</style> -->
