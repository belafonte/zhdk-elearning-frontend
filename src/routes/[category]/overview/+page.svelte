<script lang="ts">
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";
	import { type IGridSettings, gridSettingsKey } from "$lib/constants";
	import Tile from "$lib/components/Tile.svelte";
	import MetaQuestion from "$lib/components/MetaQuestion.svelte";
	import type { PageServerData } from "./$types";
	import { PUBLIC_ASSETS } from "$env/static/public";

	// export let data: PageData;
	export let data: PageServerData;

	let cols = 4;
	let extraPadding = 0;

	const currentSettings: Writable<IGridSettings> = getContext(gridSettingsKey);

	// add padding to center 2 columns layout
	$: if (cols === 2 && $currentSettings.type !== "mobile" && data.category !== "questions") {
		extraPadding = $currentSettings.colWidth;
	} else {
		extraPadding = 0;
	}

	$: if ($currentSettings.type === "mobile") {
		cols = data.cols.mobile;
	} else {
		cols = data.cols.desktop;
	}
</script>

<svelte:head>
	<title>Übersicht für {data.category}</title>
</svelte:head>

<div
	style:padding-left="{extraPadding}px"
	style:padding-right="{extraPadding}px"
	class="pb-82 sm:pb-[168px]"
>
	<div
		class="grid"
		class:grid-cols-2={cols === 2}
		class:grid-cols-4={cols === 4}
		class:space-bottom={!(data.category === "community" && $currentSettings.type === "mobile")}
	>
		{#if data.category === "questions"}
			{#each data.data as entry}
				<MetaQuestion
					path={PUBLIC_ASSETS + entry.title_image.path}
					mask={PUBLIC_ASSETS + entry.mask.path}
					link="/questions/{entry.slug}"
				/>
			{/each}
		{:else}
			{#each data.data as entry}
				<Tile data={entry} />
			{/each}
		{/if}
	</div>
</div>

<style>
	.space-bottom {
		@apply gap-y-32;
	}

	@screen sm {
		.space-bottom {
			@apply gap-y-42;
		}
	}
</style>
