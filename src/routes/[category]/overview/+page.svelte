<script lang="ts">
	import { getContext, onMount } from "svelte";
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
	$: if (
		cols === 2 &&
		$currentSettings.type !== "mobile" &&
		data.data[0].category !== "Leitfrage"
	) {
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

<div style="padding: 0 {extraPadding}px">
	<div
		class="grid gap-y-32 sm:gap-y-42"
		class:grid-cols-2={cols === 2}
		class:grid-cols-4={cols === 4}
	>
		{#if data.data[0].category === "Leitfrage"}
			{#each data.data as entry}
				<MetaQuestion
					path={PUBLIC_ASSETS + entry.title_image.path}
					mask={PUBLIC_ASSETS + entry.mask.path}
					link="/questions/{entry._id}"
				/>
			{/each}
		{:else}
			{#each data.data as entry}
				<Tile data={entry} />
			{/each}
		{/if}
	</div>
</div>
