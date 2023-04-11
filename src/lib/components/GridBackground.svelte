<script lang="ts">
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";
	import { type IGridSettings, gridSettingsKey } from "$lib/constants";

	export let column: HTMLElement | null = null;
	export let fixed = false;
	export let padding = false;
	const currentSettings: Writable<IGridSettings> = getContext(gridSettingsKey);
</script>

<div class="relative h-full">
	<div
		id="reference"
		class="grid-settings absolute left-0 top-0 z-0 h-full w-full bg-white"
		class:fixed
		class:px-15={padding}
	>
		{#each new Array($currentSettings.gridCols) as col, index}
			{#if index === 0}
				<div bind:this={column} class="border-r border-r-light-gray" />
			{:else}
				<div class="border-r border-r-light-gray" />
			{/if}
		{/each}
	</div>
	<div class="z-10 flex h-full flex-col">
		<slot />
	</div>
</div>

<style>
	#reference div:first-child {
		@apply border-l border-l-gray-200;
	}
</style>
