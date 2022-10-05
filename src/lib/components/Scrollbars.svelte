<script lang="ts">
	import { getContext, onMount } from "svelte";
	import type { Writable } from "svelte/store";
	import { type IGridSettings, gridSettingsKey } from "$lib/constants";
	import Scrollbar from "$lib/components/Scrollbar.svelte";

	export let barCount = 2;

	const currentSettings: Writable<IGridSettings> = getContext(gridSettingsKey);
	let scrollY = 0;
	let barHeight = 0;
	let barWidth = 0;

	let winHeight = 0;
	let barPosY = 0;

	let color = "orange";

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
		let scrollHeight = document.documentElement.scrollHeight;
		let scroll = scrollHeight - winHeight;
		barPosY = mapRange(scrollY, 0, scroll, 0, scrollHeight - barHeight);
	}
</script>

<svelte:window bind:scrollY bind:innerHeight={winHeight} />

<div class="absolute z-40">
	{#each new Array(barCount) as bar, index}
		<Scrollbar
			bind:height={barHeight}
			bind:width={barWidth}
			postionX={$currentSettings.colStart - barWidth / 2}
			positionY={barPosY}
			color="bg-{color}"
		/>
	{/each}
</div>
