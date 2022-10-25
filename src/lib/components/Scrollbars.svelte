<script lang="ts">
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";
	import { type IGridSettings, gridSettingsKey } from "$lib/constants";
	import Scrollbar from "$lib/components/Scrollbar.svelte";
	import { page } from "$app/stores";

	const currentSettings: Writable<IGridSettings> = getContext(gridSettingsKey);
	let scrollY = 0;
	let barHeight = 0;
	let barWidth = 0;

	let winHeight = 0;
	let barPosY = 0;

	let showBars = false;

	function clamp(input: number, min: number, max: number): number {
		return input < min ? min : input > max ? max : input;
	}

	function mapRange(
		current: number,
		in_min: number,
		in_max: number,
		out_min: number,
		out_max: number
	): number {
		const mapped: number = ((current - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
		return clamp(mapped, out_min, out_max);
	}

	$: {
		let location = $page.routeId;
		let scrollHeight = document.documentElement.scrollHeight;
		let scroll = scrollHeight - winHeight;
		barPosY = mapRange(scrollY, 0, scroll, 0, scrollHeight - barHeight);

		showBars = scroll > 0 ? true : false;
	}

	$: center = ($currentSettings.colsEnd + $currentSettings.colStart) / 2;

	$: barPositions = [
		$currentSettings.colStart,
		$currentSettings.colsEnd,
		center,
		center / 2 + barWidth / 2,
		center + center / 2 - barWidth / 2
	];
</script>

<svelte:window bind:scrollY bind:innerHeight={winHeight} />

{#if showBars}
	<div class="absolute z-[60] mix-blend-multiply">
		{#each new Array($currentSettings.barCount) as bar, index}
			<Scrollbar
				bind:height={barHeight}
				bind:width={barWidth}
				postionX={barPositions[index]}
				positionY={barPosY}
			/>
		{/each}
	</div>
{/if}
