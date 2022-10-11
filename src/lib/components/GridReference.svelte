<!-- 
	File: Grid

	Author: Jan Pistor | Bureau 314
	Year: 2022

	Description: Declares UI Grid for Website

 -->
<script lang="ts">
	// imports
	import { writable } from "svelte/store";
	import { setContext } from "svelte";
	import { type IGridSettings, gridSettingsKey } from "$lib/constants";

	// datatypes
	const gridSettings = {
		mobile: { type: "mobile", minWidth: 0, gridCols: 4, colWidth: 0, colStart: 0, height: 0 },
		tablet: { type: "tablet", minWidth: 640, gridCols: 12, colWidth: 0, colStart: 0, height: 0 },
		desktop: { type: "desktop", minWidth: 1024, gridCols: 16, colWidth: 0, colStart: 0, height: 0 }
	};

	// stores
	const currentSettings = writable<IGridSettings | undefined>(undefined);

	// variables
	let viewportWidth: number | null = null;
	let offsetHeight: number = 0;

	let column: HTMLElement | null = null;
	let content: HTMLElement | null = null;

	setContext(gridSettingsKey, currentSettings);

	// reactive statements
	$: $currentSettings = ((): IGridSettings | undefined => {
		if (viewportWidth === null) return undefined;

		let settings = undefined;
		if (viewportWidth >= gridSettings.desktop.minWidth) settings = gridSettings.desktop;
		else if (viewportWidth >= gridSettings.tablet.minWidth) settings = gridSettings.tablet;
		else settings = gridSettings.mobile;

		if (settings !== undefined && column !== null) {
			const columnDimensions = column?.getBoundingClientRect();

			settings.colWidth = columnDimensions.width;
			settings.colStart = columnDimensions.x;
			settings.height = offsetHeight;
		}

		return settings;
	})();
</script>

<!-- Alternaitve use resize, since binding seems stop working sometimes -->
<!-- <svelte:window on:resize={() => handleResize()} /> -->

<div class="h-screen w-screen" bind:clientWidth={viewportWidth}>
	{#if $currentSettings !== undefined}
		<div id="reference" class="px-15 grid-settings h-full w-full fixed">
			{#each new Array($currentSettings.gridCols) as col, index}
				<!-- {index} -->
				{#if index === 0}
					<div bind:this={column} class="border-r border-r-light-gray" />
				{:else}
					<div class="border-r border-r-light-gray" />
				{/if}
			{/each}
		</div>
		<div
			class="absolute top-0 left-0 flex flex-col min-h-full"
			bind:offsetHeight
			bind:this={content}
		>
			<slot />
		</div>
	{/if}
</div>

<style>
	:global(.grid-settings) {
		@apply grid grid-cols-4 tablet:grid-cols-12 laptop:grid-cols-16;
	}

	#reference div:first-child {
		@apply border-l border-l-gray-200;
	}
</style>
