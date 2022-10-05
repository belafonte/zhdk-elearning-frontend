<script lang="ts">
	// imports
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";
	import { type IGridSettings, gridSettingsKey } from "$lib/constants";
	import arrow from "$lib/assets/icons/arrow.svg";
	// export let colSize: number | undefined = undefined;
	export let title: string = "Title Missing";
	export let url: string;

	// $: console.log("RowComp" + colSize);
	const currentSettings: Writable<IGridSettings> = getContext(gridSettingsKey);
</script>

<div class="flex">
	<h1 class="ml-15 text-50 font-sans">{title}</h1>
	<a class="w-[35px] ml-auto mr-15 pt-10"><img src={arrow} /></a>
</div>
<div id="row" class="relative pb-15 pl-15 w-screen overflow-x-auto flex items-start transition-all">
	<slot />
</div>

<style>
	#row:hover {
		@apply pl-0;
	}
</style>
