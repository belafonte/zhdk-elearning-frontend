<script lang="ts">
	// imports
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";
	import { type IGridSettings, gridSettingsKey, type ICategory } from "$lib/constants";
	import arrow from "$lib/assets/icons/arrow.svg";
	// export let colSize: number | undefined = undefined;

	export let title: string = "Title Missing";
	export let url: string;
	export let catData: ICategory;

	// $: console.log("RowComp" + colSize);
	const currentSettings: Writable<IGridSettings> = getContext(gridSettingsKey);
</script>

<div class="flex">
	<h1 class="ml-15 text-36 sm:text-50 font-sans">{title}</h1>
	<a class="w-[30px] sm:w-[40px] ml-auto mr-15 sm:mt-5" href="/overview/{url}"
		><img src={arrow} /></a
	>
</div>
<div
	id="row"
	class="relative mb-32 sm:mb-84  pb-15 pl-15 w-screen overflow-x-auto flex items-start transition-all"
>
	<slot />
</div>

<style>
	#row:hover {
		@apply pl-0;
	}
</style>
