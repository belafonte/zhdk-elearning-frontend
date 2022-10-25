<!-- 
	File: Grid

	Author: Jan Pistor | Bureau 314
	Year: 2022

	Description: Declares UI Grid for Website

 -->
<script lang="ts">
	// imports
	import { page } from "$app/stores";
	import { writable } from "svelte/store";
	import { setContext } from "svelte";
	import { type IGridSettings, gridSettingsKey } from "$lib/constants";

	//  import components
	import GridBackground from "$lib/components/GridBackground.svelte";

	// datatypes
	const gridSettings = {
		mobile: {
			type: "mobile",
			minWidth: 0,
			gridCols: 4,
			colWidth: 0,
			colStart: 0,
			colsEnd: 0,
			barCount: 2
		},
		tablet: {
			type: "tablet",
			minWidth: 640,
			gridCols: 12,
			colWidth: 0,
			colStart: 0,
			colsEnd: 0,
			barCount: 2
		},
		laptop: {
			type: "laptop",
			minWidth: 1024,
			gridCols: 16,
			colWidth: 0,
			colStart: 0,
			colsEnd: 0,
			barCount: 2
		},
		desktop: {
			type: "desktop",
			minWidth: 1280,
			gridCols: 24,
			colWidth: 0,
			colStart: 0,
			colsEnd: 0,
			barCount: 2
		}
	};

	// stores
	const currentSettings = writable<IGridSettings | undefined>(undefined);

	// variables
	let viewportWidth: number | null = null;

	let column: HTMLElement | null = null;

	setContext(gridSettingsKey, currentSettings);

	// reactive statements
	$: $currentSettings = ((): IGridSettings | undefined => {
		if (viewportWidth === null) return undefined;

		let settings = undefined;
		if (viewportWidth >= gridSettings.desktop.minWidth) settings = gridSettings.desktop;
		else if (viewportWidth >= gridSettings.laptop.minWidth) settings = gridSettings.laptop;
		else if (viewportWidth >= gridSettings.tablet.minWidth) settings = gridSettings.tablet;
		else settings = gridSettings.mobile;

		if (settings !== undefined && column !== null) {
			const columnDimensions = column?.getBoundingClientRect();

			settings.colWidth = columnDimensions.width;
			settings.colStart = columnDimensions.x;
			settings.colsEnd = columnDimensions.x + settings.gridCols * settings.colWidth;
		}

		if (settings.type === "mobile") {
			if ($page.routeId === "") {
				settings.barCount = 2;
			} else {
				settings.barCount = 3;
			}
		} else {
			if ($page.routeId === "") {
				settings.barCount = 2;
			} else if (
				$page.params.category === "community" ||
				$page.params.category === "leitfragen" ||
				$page.params.hasOwnProperty("detail")
			) {
				settings.barCount = 3;
			} else {
				settings.barCount = 5;
			}
		}

		return settings;
	})();
</script>

<!-- Alternaitve use resize, since binding seems stop working sometimes -->
<!-- <svelte:window on:resize={() => handleResize()} /> -->

<div class="h-screen w-screen" bind:clientWidth={viewportWidth}>
	{#if $currentSettings !== undefined}
		<GridBackground fixed={true} bind:column padding={true}>
			<slot />
		</GridBackground>
	{/if}
</div>

<style>
	:global(.grid-settings) {
		@apply grid grid-cols-4 tablet:grid-cols-12 laptop:grid-cols-16 desktop:grid-cols-24;
	}
</style>
