<script lang="ts">
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";
	import { type IGridSettings, gridSettingsKey } from "$lib/constants";

	export let column: HTMLElement | null = null;
	export let fixed: boolean = false;
	export let padding: boolean = false;
	const currentSettings: Writable<IGridSettings> = getContext(gridSettingsKey);
</script>

<div class="relative">
	<div
		id="reference"
		class="grid-settings h-full w-full bg-white absolute top-0 left-0 z-0"
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
	<div class="flex flex-col min-h-screen">
		<slot />
	</div>
</div>

<style>
	#reference div:first-child {
		@apply border-l border-l-gray-200;
	}
</style>
