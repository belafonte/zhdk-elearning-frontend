<script lang="ts">
	import { getContext, onMount } from "svelte";
	import type { Writable } from "svelte/store";
	import { type IGridSettings, gridSettingsKey } from "$lib/constants";
	import Tile from "$lib/components/Tile.svelte";
	import type { PageServerData } from "./$types";

	// export let data: PageData;
	export let data: PageServerData;

	let cols = 4;
	let extraPadding = 0;
	let tileSize = "s";

	const currentSettings: Writable<IGridSettings> = getContext(gridSettingsKey);

	$: if (data.data[0].category === "Community") {
		tileSize = "l";
	} else if (data.data[0].category === "Knowledge in use") {
		tileSize = "m";
	} else {
		tileSize = "s";
	}

	// add padding to center 2 columns layout
	$: if (cols === 2 && $currentSettings.type !== "mobile") {
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
	<div class="grid" class:grid-cols-2={cols === 2} class:grid-cols-4={cols === 4}>
		{#each data.data as entry}
			<Tile size={tileSize} data={entry} />
		{/each}
	</div>
</div>
