<script lang="ts">
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";
	import { type IGridSettings, gridSettingsKey } from "$lib/constants";
	import Tile from "$lib/components/Tile.svelte";
	import MetaQuestion from "$lib/components/MetaQuestion.svelte";
	import type { PageServerData } from "./$types";
	import { PUBLIC_ASSETS } from "$env/static/public";
	import Tag from "$lib/components/Tag.svelte";

	// export let data: PageData;
	export let data: PageServerData;

	let cols = 4;
	let extraPadding = 0;

	const tags = new Set();
	const filter = new Set();

	$: filteredTags = filter;
	// $: filteredEntries = data.data.

	const currentSettings: Writable<IGridSettings> = getContext(gridSettingsKey);

	function filterTag(tag: string) {
		filter.has(tag) ? filter.delete(tag) : filter.add(tag);
		filteredTags = filter;
	}

	// add padding to center 2 columns layout
	$: if (
		cols === 2 &&
		$currentSettings.type !== "mobile" &&
		$currentSettings.type !== "tablet" &&
		data.category !== "insights"
	) {
		extraPadding = $currentSettings.colWidth;
	} else {
		extraPadding = 0;
	}

	$: if ($currentSettings.type === "mobile") {
		cols = data.cols.mobile;
	} else if ($currentSettings.type === "tablet") {
		cols = data.cols.tablet;
	} else {
		cols = data.cols.desktop;
	}

	$: if (data) {
		data.data.forEach((el) => {
			if (el.tags) {
				el.tags.forEach(tags.add, tags);
			}
		});
	}
</script>

<svelte:head>
	<title>Übersicht für {data.category}</title>
</svelte:head>

<div
	class="fixed flex w-screen justify-center"
	style:margin-top="-{(3 * $currentSettings.headerHeight) / 2}px"
>
	<div class="absolute left-0 flex">
		{#each [...tags] as tag}
			<div class="mr-5 sm:mr-8">
				<button on:click={() => filterTag(tag)}>
					<Tag text={tag} rounded={true} dimmed={!filteredTags.has(tag)} />
				</button>
			</div>
		{/each}
	</div>
	<div>
		<Tag text={data.category.toUpperCase()} background={true} />
	</div>
</div>

<div
	style:padding-left="{extraPadding}px"
	style:padding-right="{extraPadding}px"
	class="pb-82 sm:pb-[168px]"
>
	<div
		class="grid"
		class:grid-cols-2={cols === 2}
		class:grid-cols-3={cols === 3}
		class:grid-cols-4={cols === 4}
		class:space-bottom={!(data.category === "community" && $currentSettings.type === "mobile")}
	>
		{#if data.category === "insights"}
			{#each data.data as entry}
				<MetaQuestion
					path={PUBLIC_ASSETS + entry.title_image.path}
					mask={PUBLIC_ASSETS + entry.mask.path}
					link="/insights/{entry.slug}"
				/>
			{/each}
		{:else}
			{#each data.data as entry}
				{#if filteredTags.size > 0 ? entry.tags.some((el) => filteredTags.has(el)) : true}
					<Tile data={entry} />
				{/if}
			{/each}
		{/if}
	</div>
</div>

<style>
	.space-bottom {
		@apply gap-y-32;
	}

	@screen sm {
		.space-bottom {
			@apply gap-y-42;
		}
	}
</style>
